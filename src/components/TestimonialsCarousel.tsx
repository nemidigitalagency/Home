import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

const testimonials = [
  {
    quote: "Nemi rebuilt our jewellery site from scratch in three weeks. The daily dealer email alone paid for the project in the first month. They answer at 10pm and ship on Saturdays.",
    name: 'Bundelkhand Jewellery',
    role: 'Founder · Jhansi',
    initials: 'BJ',
    bg: 'from-amber-400 to-pink-500',
  },
  {
    quote: "We went from a Wix site that didn't rank to page 1 on Google for our top keywords. Real revenue, real fast. These guys actually care.",
    name: 'Kanpur Dental Clinic',
    role: 'Owner · Kanpur',
    initials: 'KD',
    bg: 'from-cyan-400 to-violet-500',
  },
  {
    quote: "Working with Nemi feels like having an in-house tech team. No meetings that could've been emails. They just ship, every week.",
    name: 'LogiSaaS',
    role: 'CEO · Remote',
    initials: 'LS',
    bg: 'from-emerald-400 to-cyan-500',
  },
  {
    quote: "The site they built for our resort is genuinely beautiful — and bookings doubled in the first month. 10/10.",
    name: 'Silver Estate Resort',
    role: 'Owner · Orchha',
    initials: 'SR',
    bg: 'from-fuchsia-500 to-rose-500',
  },
];

export default function TestimonialsCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, EffectCreative]}
      effect="creative"
      grabCursor={true}
      loop={true}
      speed={900}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ el: '.testi-pagination', clickable: true }}
      creativeEffect={{
        prev: { opacity: 0, translate: ['-20%', 0, -200], rotate: -4 },
        next: { opacity: 0, translate: ['20%', 0, -200], rotate: 4 },
      }}
      className="testi-swiper !overflow-visible"
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.name}>
          <div className="glass p-8 md:p-14 max-w-4xl mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="currentColor" className="text-fuchsia-500/30 mb-4">
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.76-2-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.76-2-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            </svg>
            <p className="text-2xl md:text-4xl font-display font-medium leading-tight text-white">"{t.quote}"</p>
            <div className="mt-10 flex items-center gap-4">
              <span className={`h-14 w-14 rounded-full bg-gradient-to-br ${t.bg} flex items-center justify-center font-bold text-white text-lg`}>
                {t.initials}
              </span>
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-white/50">{t.role}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
