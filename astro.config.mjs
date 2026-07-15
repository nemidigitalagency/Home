import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';

const SITE = process.env.SITE_URL || process.env.URL || 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind(), react()],
});
