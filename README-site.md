# Nemi Digital Agency Site — Developer / Deploy Docs

This is the full guide for developing and deploying the site. For the public-facing intro, see [`README.md`](./README.md) (shown on our GitHub profile).

## Stack

- **Astro 4** — static-first, outputs nearly zero client-side JS
- **Tailwind CSS** — styling
- **Netlify** — hosting + Netlify Forms (captures contact submissions automatically)
- **Resend** *(optional, later)* — branded transactional email once a custom domain is verified

## Local dev

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # production build to ./dist
```

No environment variables are required to build or run locally.

## Deploy to Netlify (no custom domain needed)

1. Repo already lives at **https://github.com/nemidigitalagency/Home**.
2. In Netlify → **Add new site → Import from Git** → pick **`Home`**.
3. Netlify auto-detects Astro. Confirm:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20 (set automatically via `netlify.toml`)
4. Click **Deploy**. In ~60 seconds you get a live URL like `https://nemi-digital.netlify.app`.
5. Netlify auto-detects the contact form (thanks to `public/__forms.html`).
6. *(Optional)* Netlify → Forms → `contact` → Settings → Notifications → add email forwarding to `nemidigitalagency@gmail.com`.

## When we later add a custom domain

1. Netlify → Domain settings → Add custom domain (e.g. `nemidigital.agency`).
2. Set DNS at the registrar to point at Netlify.
3. *(Optional, for branded email)* Sign up to Resend, verify the domain, and set these env vars in Netlify:
   - `RESEND_API_KEY=re_...`
   - `CONTACT_TO_EMAIL=hello@nemidigital.agency`
   - `CONTACT_FROM_EMAIL=Nemi Website <noreply@nemidigital.agency>`
4. Optionally set `SITE_URL=https://nemidigital.agency` so the sitemap uses the pretty domain.

Netlify Forms continues to capture submissions even after Resend is enabled — belt-and-braces.

## How the contact form works

- Form has `data-netlify="true"` + a static detection form in `public/__forms.html` → **Netlify Forms** captures *every* submission at the edge (visible in Netlify dashboard → Forms). Works day one with zero config.
- Form POSTs to `/api/contact`, which:
  - Checks a honeypot field to silently drop bot spam
  - If Resend env vars are configured → sends a branded email notification
  - If not configured (current state) → redirects to `/contact?success=1` — the lead is already saved by Netlify either way
- Inline success message is shown client-side on the contact page.

## Customizing

All brand / contact basics live in **`src/config.ts`**:

```ts
export const site = {
  url: ...,            // auto-detected from env (Netlify sets process.env.URL)
  name: 'Nemi Digital Agency',
  tagline: 'Web, Brand & Growth for Modern Businesses',
  email: 'nemidigitalagency@gmail.com',
  whatsapp: '',        // e.g. '+919876543210' — fills in a WhatsApp row when set
  github: 'https://github.com/nemidigitalagency',
  location: 'Bundelkhand (Jhansi), Uttar Pradesh, India',
};
```

Other easy edits:

- **Colors / brand:** `tailwind.config.mjs` (`brand`, `accent`, `ink` palettes).
- **Content of each section** is in `src/components/*.astro` — arrays at the top of each file (`services`, `projects`, `testimonials`) are easy to edit without touching markup.
- **OG/social image:** drop a 1200×630 `public/og-image.png`.
- **Favicon/logo:** replace `public/favicon.svg` (currently a stylized "N").

## Project structure

```
nemi-agency/     ← (root of this repo)
├── public/               # static assets (favicon, robots, Netlify forms detection)
├── src/
│   ├── components/       # Navbar, Footer, Hero, Services, Work, About, Testimonials, CTA
│   ├── layouts/Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   ├── 404.astro
│   │   ├── sitemap.xml.ts     # build-time generated sitemap
│   │   └── api/contact.ts     # Resend email endpoint (optional)
│   ├── config.ts              # all easy-to-edit site settings
│   └── styles/global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
├── LICENSE                    # MIT
└── package.json
```

## License

MIT © Nemi Digital Agency.
