import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'build',
  },
  define: {
    'import.meta.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'import.meta.env.VITE_VF_DM_API_KEY': JSON.stringify(process.env.VITE_VF_DM_API_KEY) || process.env.VITE_VF_DM_API_KEY,
  },
  envPrefix: 'VF_',
  server: {
    port: 3006,
  },
});