// Mesh API — ingest (POST from pusher) + serve (GET for widget)
// Data stored in Netlify Blob keyed by endpoint name.
//
// POST /.netlify/functions/mesh-api  (body: {nodeinfo, peers, epoch, persistence})
// GET  /.netlify/functions/mesh-api/peers

import { getStore } from '@netlify/blobs';

const ENDPOINTS = ['nodeinfo', 'peers', 'epoch', 'persistence'];

export default async (request) => {
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/mesh-api\/?/, '');

  // ── POST: ingest from pusher ─────────────────────────────────
  if (request.method === 'POST') {
    const auth = request.headers.get('authorization') || '';
    const expected = `Bearer ${process.env.MESH_PUSH_SECRET || ''}`;
    if (auth !== expected) {
      return Response.json({ error: 'Forbidden' }, { status: 403 });
    }

    const body = await request.json();
    const store = getStore('mesh-api');
    const received_at = new Date().toISOString();

    for (const ep of ENDPOINTS) {
      if (body[ep]) {
        const entry = JSON.stringify({ data: body[ep], received_at });
        await store.set(ep, entry);
      }
    }

    return Response.json({ ok: true, received_at });
  }

  // ── GET: serve data to widget ────────────────────────────────
  // health check
  if (path === '__health') {
    const store = getStore('mesh-api');
    const sample = await store.get('nodeinfo');
    return Response.json({
      ok: true,
      has_data: !!sample,
    });
  }

  const endpoint = path || 'nodeinfo';
  const store = getStore('mesh-api');
  const raw = await store.get(endpoint);

  if (!raw) {
    return Response.json({ error: 'No data yet' }, { status: 503 });
  }

  const entry = JSON.parse(raw);
  return Response.json(entry, {
    headers: { 'content-type': 'application/json', 'cache-control': 'no-cache' },
  });
};
