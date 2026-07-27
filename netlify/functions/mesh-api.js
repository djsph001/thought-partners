// Mesh status reader — serves latest pushed status from Netlify Blobs.
// Single endpoint: /mesh-api/status returns the full bundle.

import { getStore } from '@netlify/blobs';

const store = getStore('mesh-status');

export default async (request) => {
  const raw = await store.get('latest');

  if (!raw) {
    return Response.json(
      { online: false, error: 'No data yet — pusher may be starting' },
      {
        status: 200,
        headers: { 'content-type': 'application/json', 'cache-control': 'no-cache' },
      }
    );
  }

  return new Response(raw, {
    status: 200,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-cache' },
  });
};
