// Mesh API — ingest (POST from pusher) + serve (GET for widget)
// Data stored in-memory (module-scoped Map). Survives warm starts,
// resets on cold starts — pusher fills within 12s either way.

const ENDPOINTS = ['nodeinfo', 'peers', 'epoch', 'persistence'];

// In-memory store per endpoint. Keyed by name, value = { data, received_at }.
const store = new Map();

// Map the function to the /mesh-api/* path so widget's relative fetch hits it
export const config = { path: '/mesh-api/*' };

export default async (request) => {
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/mesh-api\/?/, '');

  // ── POST: ingest from pusher (no auth — data is public mesh status) ──
  if (request.method === 'POST') {
    const body = await request.json();
    const received_at = new Date().toISOString();

    for (const ep of ENDPOINTS) {
      if (body[ep]) {
        store.set(ep, { data: body[ep], received_at });
      }
    }

    return Response.json({ ok: true, received_at });
  }

  // ── GET: serve data to widget ────────────────────────────────
  // health check
  if (path === '__health') {
    return Response.json({
      ok: true,
      has_data: store.size > 0,
    });
  }

  const endpoint = path || 'nodeinfo';
  const entry = store.get(endpoint);

  if (!entry) {
    return Response.json({ error: 'No data yet' }, { status: 503 });
  }

  return Response.json(entry, {
    headers: { 'content-type': 'application/json', 'cache-control': 'no-cache' },
  });
};
