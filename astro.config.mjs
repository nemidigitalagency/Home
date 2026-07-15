import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// Auto-detect site URL:
//   - on Netlify: process.env.URL is automatically set to your *.netlify.app URL (or custom domain)
//   - locally:    defaults to localhost:4321
//   - override:   set SITE_URL env var for a custom domain later (no code change needed)
const SITE = process.env.SITE_URL || process.env.URL || 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: 'hybrid', // static by default, one tiny server endpoint for the contact form
  adapter: netlify(),
  integrations: [tailwind()],
});
