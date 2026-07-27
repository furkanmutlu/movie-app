import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Keep the CRA-era `REACT_APP_` prefix so existing deployment env vars
  // (e.g. REACT_APP_API_KEY on Netlify) keep working without renaming.
  envPrefix: ['VITE_', 'REACT_APP_'],
  // Several source files use JSX inside `.js` files (CRA allowed this).
  // Tell esbuild to parse `.js` in /src as JSX so we don't have to rename them.
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
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
