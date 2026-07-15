import type { APIRoute } from 'astro';

/**
 * Contact form endpoint.
 *
 * Submission flow (works out-of-the-box without a custom domain):
 *  1. The form ALSO has data-netlify="true", so Netlify Forms captures every submission
 *     directly at the edge (visible in Netlify dashboard → Forms, and optionally emailed
 *     to you via Netlify's form notifications — no code/API key needed).
 *  2. This endpoint runs AFTER Netlify's capture. If Resend env vars are configured it
 *     sends a branded email notification; if not (e.g. before you buy a domain), it just
 *     redirects to the success page quietly — the lead is already saved by Netlify.
 *
 * Set these env vars later (after buying a domain + verifying it in Resend):
 *   RESEND_API_KEY=re_xxxx
 *   CONTACT_TO_EMAIL=hello@nemidigital.agency
 *   CONTACT_FROM_EMAIL=Nemi Website <noreply@nemidigital.agency>
 */
export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();

  // Honeypot: silently succeed for bots so they don't get a useful error signal
  if (formData.get('bot-field')) {
    return redirect('/contact?success=1', 303);
  }

  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const company = String(formData.get('company') ?? '').trim();
  const budget = String(formData.get('budget') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (!name || !email || !message) {
    return new Response('Missing required fields', { status: 400 });
  }

  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const toEmail = import.meta.env.CONTACT_TO_EMAIL;
  const fromEmail = import.meta.env.CONTACT_FROM_EMAIL || 'Nemi Website <noreply@nemidigital.agency>';

  if (resendApiKey && toEmail) {
    try {
      // Dynamic import so Resend isn't loaded if not configured
      const { Resend } = await import('resend');
      const resend = new Resend(resendApiKey);
      await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        replyTo: email,
        subject: `New project inquiry from ${name}`,
        text:
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Company: ${company || '—'}\n` +
          `Budget: ${budget || '—'}\n` +
          `\nMessage:\n${message}`,
      });
    } catch (err) {
      console.error('Resend error:', err);
      // Don't block the user — Netlify Forms already saved the submission.
    }
  }

  return redirect('/contact?success=1', 303);
};
