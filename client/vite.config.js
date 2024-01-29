/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: import.meta.env.MODE === 'production' ? 'https://snap-and-rent.vercel.app/' : 'http://localhost:3000',
        secure: false,
        changeOrigin: true,
      },
    },
  },

  plugins: [react()],
});
