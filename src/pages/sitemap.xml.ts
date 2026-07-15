import type { APIRoute } from 'astro';
import { site } from '../config';

// Dynamic sitemap generated at build time using site.url (which reads from env or falls back to localhost).
// This means when Netlify builds the site with its *.netlify.app URL, the sitemap will use that URL automatically,
// and when you later set SITE_URL to your custom domain it'll update without code changes.

const pages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/contact', changefreq: 'monthly', priority: '0.9' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
];

const origin = site.url.replace(/\/$/, '');

// Prerender at build time → outputs static /sitemap.xml (no runtime function needed).
export const prerender = true;

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url><loc>${origin}${p.path}</loc><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
