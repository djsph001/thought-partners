// Mesh API — ingest (POST from pusher) + serve (GET for widget)
// Data stored in-memory (module-scoped Map), with cold-start fallback
// to the bridge's public Funnel URL.
//
// No auth on POST — data is public mesh status, pusher overwrites
// every 12s. Worst case: widget shows spoofed data for one push cycle.

const FALLBACK = 'https://dale-joseph-hp-z4-g4-workstation.taild96c2e.ts.net/mesh/api';
const ENDPOINTS = ['nodeinfo', 'peers', 'epoch', 'persistence'];
const store = new Map();

export const config = { path: '/mesh-api/*' };

export default async (request) => {
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/mesh-api\/?/, '');

  // ── POST: ingest from pusher ───────────────────────────────────
  if (request.method === 'POST') {
    const body = await request.json();
    const received_at = new Date().toISOString();
    for (const ep of ENDPOINTS) {
      if (body[ep]) store.set(ep, { data: body[ep], received_at });
    }
    return Response.json({ ok: true, received_at });
  }

  // ── GET: serve data to widget ──────────────────────────────────
  if (path === '__health') {
    return Response.json({ ok: true, has_data: store.size > 0 });
  }

  const endpoint = path || 'nodeinfo';
  let entry = store.get(endpoint);

  // Cold-start fallback
  if (!entry && FALLBACK) {
    try {
      const resp = await fetch(`${FALLBACK}/${endpoint}`);
      if (resp.ok) {
        const body = await resp.json();
        entry = { data: body.data || body, received_at: new Date().toISOString() };
        store.set(endpoint, entry);
      }
    } catch (_) { /* fallback failed — return 503 */ }
  }

  if (!entry) return Response.json({ error: 'No data yet' }, { status: 503 });

  return Response.json(entry, {
    headers: { 'content-type': 'application/json', 'cache-control': 'no-cache' },
  });
};
