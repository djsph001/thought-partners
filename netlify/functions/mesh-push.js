// Mesh status receiver — accepts push from Z4, stores in Netlify Blobs.
// Stamps received_at server-side (never trusts pusher's clock).

import { getStore } from '@netlify/blobs';

const store = getStore('mesh-status');

export default async (request) => {
  if (request.method !== 'POST') {
    return Response.json({ error: 'POST only' }, { status: 405 });
  }

  try {
    const payload = await request.json();
    // Stamp server-side — the one clock we trust for staleness
    payload.received_at = Date.now();
    await store.set('latest', JSON.stringify(payload));
    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ error: `Bad payload: ${e.message}` }, { status: 400 });
  }
};
