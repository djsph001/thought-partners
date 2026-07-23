// Mesh API proxy — server-side fetch to Tailscale Funnel, same-origin to browser.
// Handles /mesh-api/* → upstream Funnel bridge with correct Host/SNI.
// 502 on failure so the browser sees an honest error, not a silent null.

const UPSTREAM = process.env.MESH_UPSTREAM_URL || 'https://dale-joseph-hp-z4-g4-workstation.taild96c2e.ts.net/mesh/api';

export default async (request) => {
  const path = new URL(request.url).pathname;
  const endpoint = path.replace(/^\/mesh-api\/?/, '');

  if (!endpoint) {
    return Response.json(
      { error: 'Missing endpoint — use /mesh-api/<endpoint>' },
      { status: 400 }
    );
  }

  try {
    const resp = await fetch(`${UPSTREAM}/${endpoint}`);

    if (!resp.ok) {
      return Response.json(
        { error: `Upstream returned ${resp.status}` },
        { status: 502 }
      );
    }

    const body = await resp.text();
    return new Response(body, {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'no-cache',
      },
    });
  } catch (e) {
    return Response.json(
      { error: `Mesh unreachable: ${e.message}` },
      { status: 502 }
    );
  }
};
