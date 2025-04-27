import { defineConfig } from 'astro/config';

export default defineConfig({
  // …Deine bisherigen Astro-Konfigurationen

  vite: {
    ssr: {
      // Astro internals (z.B. 'astro/server') werden gebündelt
      noExternal: ['astro']
    }
  }
});
