// Mesh API — ingest (POST with auth) + serve (GET, public)
// Data stored in Netlify Blobs (shared across all Function instances).
// Replaces the in-memory Map that caused stale reads when GET and POST
// landed on different Lambda instances.

import { getStore } from "@netlify/blobs";

const SECRET = '5WnD4LAPp/GzMQ80ivuRGTDTy/3p/6wTRXyD3yrpsH0=';
const ENDPOINTS = ['nodeinfo', 'peers', 'epoch', 'persistence'];
const store = getStore("mesh-api");

export const config = { path: '/mesh-api/*' };

export default async (request) => {
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/mesh-api\/?/, '');

  // ── POST: ingest from pusher (authenticated) ──────────────────
  if (request.method === 'POST') {
    const auth = request.headers.get('authorization') || '';
    if (auth !== `Bearer ${SECRET}`) {
      return Response.json({ error: 'Forbidden' }, { status: 403 });
    }
    const body = await request.json();
    const received_at = new Date().toISOString();
    for (const ep of ENDPOINTS) {
      if (body[ep]) {
        await store.setJSON(ep, { data: body[ep], received_at });
      }
    }
    return Response.json({ ok: true, received_at });
  }

  // ── GET: serve data to widget (public) ────────────────────────
  if (path === '__health') {
    return Response.json({ ok: true });
  }
  const endpoint = path || 'nodeinfo';
  const entry = await store.getJSON(endpoint);
  if (!entry) {
    return Response.json({ error: 'No data yet' }, { status: 503 });
  }
  return Response.json(entry, {
    headers: { 'content-type': 'application/json', 'cache-control': 'no-cache' },
  });
};
