// Mesh status receiver — accepts push from Z4, stores in Netlify Blobs.
// Validates shared secret, stamps received_at server-side (never trusts pusher's clock).

import { getStore } from '@netlify/blobs';

const store = getStore('mesh-status');

export default async (request) => {
  if (request.method !== 'POST') {
    return Response.json({ error: 'POST only' }, { status: 405 });
  }

  const secret = process.env.MESH_PUSH_SECRET;
  if (!secret) {
    return Response.json({ error: 'Server not configured' }, { status: 500 });
  }

  const auth = request.headers.get('authorization') || '';
  if (auth !== `Bearer ${secret}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const payload = await request.json();
    payload.received_at = Date.now();
    await store.set('latest', JSON.stringify(payload));
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ error: `Bad payload: ${e.message}` }, { status: 400 });
  }
};
