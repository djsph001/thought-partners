// Mesh API proxy — server-side fetch to Tailscale Funnel, same-origin to browser.

const UPSTREAM = process.env.MESH_UPSTREAM_URL || 'https://dale-joseph-hp-z4-g4-workstation.taild96c2e.ts.net/mesh/api';

export default async (request) => {
  const path = new URL(request.url).pathname;
  const endpoint = path.replace(/^\/mesh-api\/?/, '');

  // Health check — test if outbound networking works at all
  if (endpoint === '__health') {
    try {
      const r = await fetch('https://httpbin.org/get');
      return Response.json({ outbound: r.ok ? 'ok' : `httpbin ${r.status}` });
    } catch (e) {
      return Response.json({ outbound: 'fail', error: e.message, cause: e.cause?.message || e.cause?.code || 'no cause' });
    }
  }

  if (!endpoint) {
    return Response.json({ error: 'Missing endpoint' }, { status: 400 });
  }

  try {
    const resp = await fetch(`${UPSTREAM}/${endpoint}`);

    if (!resp.ok) {
      return Response.json({ error: `Upstream ${resp.status}` }, { status: 502 });
    }

    const body = await resp.text();
    return new Response(body, {
      status: 200,
      headers: { 'content-type': 'application/json', 'cache-control': 'no-cache' },
    });
  } catch (e) {
    return Response.json(
      { error: `Mesh unreachable: ${e.message}`, cause: e.cause?.message || e.cause?.code || 'no cause' },
      { status: 502 }
    );
  }
};
