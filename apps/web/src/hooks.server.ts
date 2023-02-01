import type { Handle } from '@sveltejs/kit';
import { PUBLIC_OBSIDIAN_PUBLIC_AUTH_DIRS } from '$env/static/public';
import { paramsPathToRoutePath } from '$lib/utils';

export const handle: Handle = async ({ event, resolve }) => {
  const pathAuthList = PUBLIC_OBSIDIAN_PUBLIC_AUTH_DIRS.split(',').map((authDir) => {
    const [paramsPath, userPass] = authDir.split('=');
    const encoded = Buffer.from(userPass).toString('base64');
    return {
      path: paramsPathToRoutePath(paramsPath),
      auth: `Basic ${encoded}`,
    };
  });

  for (const { path, auth } of pathAuthList) {
    if (event.url.pathname.startsWith(path)) {
      const headerAuth = event.request.headers.get('Authorization');
      if (headerAuth !== auth) {
        return new Response('Not authorized', {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Basic realm="User Visible Realm", charset="UTF-8"',
          },
        });
      }
    }
  }

  const response = await resolve(event);
  return response;
};
