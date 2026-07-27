import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Keep the CRA-era `REACT_APP_` prefix so existing deployment env vars
  // (e.g. REACT_APP_API_KEY on Netlify) keep working without renaming.
  envPrefix: ['VITE_', 'REACT_APP_'],
  build: {
    outDir: 'build', // match CRA output dir so existing deploy config still works
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: false,
  },
});
