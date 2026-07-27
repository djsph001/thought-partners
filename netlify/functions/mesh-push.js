// Mesh status receiver — accepts push from Z4, stores in Netlify Blobs.
// Public-read model (no auth — Netlify free tier doesn't support env vars).
// Stamps received_at server-side (never trusts pusher's clock).

import { getStore } from '@netlify/blobs';

const store = getStore('mesh-status');

export default async (request) => {
  if (request.method !== 'POST') {
    return Response.json({ error: 'POST only' }, { status: 405 });
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
