import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type UserConfigExport } from 'vite';

const config: UserConfigExport = defineConfig(() => {
  return {
    plugins: [sveltekit()],
    test: {
      include: ['src/**/*.{test,spec}.{js,ts}'],
    },
  };
});

export default config;
