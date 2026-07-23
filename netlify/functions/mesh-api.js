// Mesh API — ingest (POST with auth) + serve (GET, public)
// Data persisted in Netlify Blobs keyed by endpoint name.
// Cold starts and concurrent instances share the same blob store.

import { getStore } from '@netlify/blobs';

const SECRET='Hj7ukiVBMpbRu0b89BgruQpYWQJtS9Vq4D/qPFoEN0Y=';
const ENDPOINTS = ['nodeinfo', 'peers', 'epoch', 'persistence'];

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
    const store = getStore('mesh-api');
    for (const ep of ENDPOINTS) {
      if (body[ep]) {
        await store.set(ep, JSON.stringify({ data: body[ep], received_at }));
      }
    }
    return Response.json({ ok: true, received_at });
  }

  // ── GET: serve data to widget (public) ────────────────────────
  if (path === '__health') {
    return Response.json({ ok: true });
  }
  const endpoint = path || 'nodeinfo';
  const store = getStore('mesh-api');
  const raw = await store.get(endpoint);
  if (!raw) {
    return Response.json({ error: 'No data yet' }, { status: 503 });
  }
  return Response.json(JSON.parse(raw), {
    headers: { 'content-type': 'application/json', 'cache-control': 'no-cache' },
  });
};
