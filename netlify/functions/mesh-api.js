// Mesh API — ingest (POST from pusher) + serve (GET for widget)
// Data stored in-memory (module-scoped Map). Survives warm starts,
// resets on cold starts — pusher fills within 12s either way.

// Shared secret for POST authentication. Same value as the pusher's
// config file at /home/dale-joseph/.config/mesh-push/secret.
// GET requests remain unauthenticated (public mesh status).
const PUSH_SECRET = '***';

// Fallback upstream for cold-start recovery — if the Map is empty
// (cold start, no pusher data yet), the function fetches fresh data
// from the bridge's public Funnel URL.  Pusher keeps the Map warm
// during normal operation.
const FALLBACK = 'https://dale-joseph-hp-z4-g4-workstation.taild96c2e.ts.net/mesh/api';

const ENDPOINTS = ['nodeinfo', 'peers', 'epoch', 'persistence'];

// In-memory store per endpoint. Keyed by name, value = { data, received_at }.
const store = new Map();

// Map the function to the /mesh-api/* path so widget's relative fetch hits it
export const config = { path: '/mesh-api/*' };

export default async (request) => {
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/mesh-api\/?/, '');

  // ── POST: ingest from pusher (authenticated with shared secret) ────
  if (request.method === 'POST') {
    const auth = request.headers.get('authorization') || '';
    const PUSH_SECRET = '***';
      return Response.json({ error: 'Forbidden' }, { status: 403 });
    }

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
  let entry = store.get(endpoint);

  // ── Cold-start recovery: fall back to Funnel URL ─────────────
  if (!entry && FALLBACK) {
    try {
      const resp = await fetch(`${FALLBACK}/${endpoint}`);
      if (resp.ok) {
        const body = await resp.json();
        entry = { data: body.data || body, received_at: new Date().toISOString() };
        store.set(endpoint, entry);
      }
    } catch (_) {
      // fallback failed — return 503 below
    }
  }

  if (!entry) {
    return Response.json({ error: 'No data yet' }, { status: 503 });
  }

  return Response.json(entry, {
    headers: { 'content-type': 'application/json', 'cache-control': 'no-cache' },
  });
};
