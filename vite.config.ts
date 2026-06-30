import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Split React and core libraries
            if (id.includes('react') || id.includes('scheduler')) return 'react-core';
            // Split Three.js and heavy 3D libs
            if (id.includes('three') || id.includes('@react-three')) return 'three-vendor';
            // Split animation libraries
            if (id.includes('framer-motion') || id.includes('gsap')) return 'animation-vendor';
            // Everything else
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    target: 'esnext',
  },
  server: {
    port: 5173,
    open: true,
  },
});
