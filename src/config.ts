// Central site config — edit these values before launch.
// No custom domain yet? Leave SITE_URL empty; Netlify will auto-set it to your *.netlify.app URL.

export const site = {
  // Set this to your final domain when you buy one (e.g. "https://nemidigital.agency").
  // On Netlify we auto-detect the deployed URL via process.env.URL even without this.
  url: import.meta.env.SITE_URL || import.meta.env.URL || 'http://localhost:4321',

  name: 'Nemi Digital Agency',
  tagline: 'Web, Brand & Growth for Modern Businesses',

  // Use whatever email you actually check right now (gmail, yahoo, etc.) — no custom domain needed.
  email: 'nemidigitalagency@gmail.com',

  // Social/contact (optional, leave empty string to hide)
  whatsapp: '', // e.g. "+919876543210"
  github: 'https://github.com/nemidigitalagency',
  location: 'Bundelkhand (Jhansi), Uttar Pradesh, India',

  // Set to a real Resend key + "from" address only AFTER you buy a domain and verify it in Resend.
  // Until then, the contact form works perfectly via Netlify Forms (zero-config, captures submissions in the Netlify dashboard + can email you automatically).
  resendEnabled: Boolean(import.meta.env.RESEND_API_KEY && import.meta.env.CONTACT_TO_EMAIL),
};

export type SiteConfig = typeof site;
