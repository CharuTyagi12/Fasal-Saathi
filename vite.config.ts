import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    build: {
      cssMinify: 'esbuild' as const,
    },
    server: {
      allowedHosts: ['.trycloudflare.com'],
      proxy: {
        '/api': {
          target: process.env.VITE_BACKEND_URL || 'http://127.0.0.1:5001',
          changeOrigin: true,
        },
      },
    },
  };
});
