import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination, Navigation, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax';

const projects = [
  {
    name: 'Bundelkhand Jewellery',
    tag: 'E-commerce · Supabase · TanStack Start',
    desc: 'Full jewellery e-commerce with live metal rate sync, dealer CSV mailer (Resend + GitHub Actions), admin rate lock, auto image optimization.',
    href: 'https://bundelkhandjwelery.netlify.app',
    tag2: 'Live',
    bg: 'from-amber-500/80 via-rose-500/60 to-fuchsia-600/70',
    glow: 'shadow-[0_0_100px_-10px_rgba(251,191,36,0.4)]',
  },
  {
    name: 'Silver Estate Weddings',
    tag: 'Brochure · Astro · Photography',
    desc: 'Elegant wedding venue microsite with gallery carousel, inquiry form and event packages. Shipped in 10 days.',
    href: '#',
    tag2: 'Case study',
    bg: 'from-fuchsia-500/70 via-pink-500/60 to-rose-500/60',
    glow: 'shadow-[0_0_100px_-10px_rgba(236,72,153,0.4)]',
  },
  {
    name: 'Silver Estate Resort',
    tag: 'Hospitality · Booking-ready · SEO',
    desc: 'Resort website with room showcase, local SEO for Jhansi tourism, and a WhatsApp-first booking flow.',
    href: '#',
    tag2: 'Case study',
    bg: 'from-emerald-400/60 via-cyan-500/60 to-sky-500/60',
    glow: 'shadow-[0_0_100px_-10px_rgba(34,211,238,0.4)]',
  },
  {
    name: 'Dealer CRM & Mailers',
    tag: 'Automation · GitHub Actions · Resend',
    desc: 'Automated daily product catalog emails to hundreds of dealers with open tracking, rate locks and admin audit trail.',
    href: '#',
    tag2: 'Internal tool',
    bg: 'from-violet-600/70 via-indigo-600/60 to-blue-600/60',
    glow: 'shadow-[0_0_100px_-10px_rgba(139,92,246,0.5)]',
  },
  {
    name: 'SaaS Landing Kit',
    tag: 'Next.js · Resend · Waitlist',
    desc: 'Launch-ready marketing site with waitlist, pricing, testimonials and legal pages — ship a product in a weekend.',
    href: '#',
    tag2: 'Template',
    bg: 'from-pink-500/70 via-fuchsia-500/60 to-violet-600/70',
    glow: 'shadow-[0_0_100px_-10px_rgba(217,70,239,0.5)]',
  },
  {
    name: 'Local Business Starter',
    tag: 'Astro · Tailwind · SEO',
    desc: 'High-converting single-page template for restaurants, clinics and retail — Lighthouse 98+, Google Business + WhatsApp CTA.',
    href: '#',
    tag2: 'Template',
    bg: 'from-cyan-400/70 via-teal-400/60 to-emerald-400/60',
    glow: 'shadow-[0_0_100px_-10px_rgba(45,212,191,0.4)]',
  },
];

export default function WorkCarousel() {
  return (
    <>
      <Swiper
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation, Parallax]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        speed={800}
        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        coverflowEffect={{ rotate: 25, stretch: 0, depth: 250, modifier: 1, slideShadows: false }}
        pagination={{ el: '.work-pagination', clickable: true }}
        navigation={{ prevEl: '.work-prev', nextEl: '.work-next' }}
        parallax={true}
        breakpoints={{
          0: { slidesPerView: 1.1, spaceBetween: 20, coverflowEffect: { rotate: 15, depth: 100 } },
          768: { slidesPerView: 1.6, spaceBetween: 30 },
          1200: { slidesPerView: 2.2, spaceBetween: 40 },
        }}
        className="work-swiper !overflow-visible !py-6"
      >
        {projects.map((p) => (
          <SwiperSlide key={p.name} className="!w-[320px] md:!w-[480px] !h-[560px] md:!h-[600px]">
            <a
              href={p.href}
              target={p.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className={`project-card block relative h-full w-full ${p.glow}`}
              data-cursor-hover
            >
              <div className={`h-2/3 bg-gradient-to-br ${p.bg} relative overflow-hidden`}>
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end" data-swiper-parallax="-200">
                  <div className="glass p-3 md:p-4 w-full max-w-sm ml-auto">
                    <div className="flex gap-1.5 pb-2 border-b border-white/10">
                      <span className="h-2 w-2 rounded-full bg-white/40"></span>
                      <span className="h-2 w-2 rounded-full bg-white/40"></span>
                      <span className="h-2 w-2 rounded-full bg-white/40"></span>
                    </div>
                    <div className="pt-2 space-y-1.5">
                      <div className="h-2 w-3/4 rounded bg-white/30"></div>
                      <div className="h-2 w-1/2 rounded bg-white/20"></div>
                      <div className="grid grid-cols-3 gap-1.5 pt-2">
                        <div className="h-10 rounded bg-white/20"></div>
                        <div className="h-10 rounded bg-white/20"></div>
                        <div className="h-10 rounded bg-white/20"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="absolute top-5 left-5 bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono uppercase tracking-[0.2em] px-3 py-1.5 rounded-full z-10">
                  {p.tag2}
                </span>
                <span className="shine"></span>
              </div>
              <div className="h-1/3 bg-gradient-to-b from-white/[0.03] to-white/[0.08] p-6 md:p-8 flex flex-col justify-between border-t border-white/10">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-fuchsia-300 mb-3">{p.tag}</p>
                  <h3 className="text-2xl md:text-3xl font-display font-bold" data-swiper-parallax="-100">
                    {p.name}
                  </h3>
                  <p className="text-white/60 text-sm mt-2 leading-relaxed" data-swiper-parallax="-50">
                    {p.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xs text-white/40 font-mono">{p.href === '#' ? 'Coming soon' : 'View project →'}</span>
                  <span className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>{`
        .work-swiper .swiper-slide { opacity: 0.4 !important; transition: opacity 0.5s !important; }
        .work-swiper .swiper-slide-active { opacity: 1 !important; }
      `}</style>
    </>
  );
}
