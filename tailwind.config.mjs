/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#07070c',
        'bg-soft': '#0d0d17',
        violet: { 400:'#a78bfa', 500:'#8b5cf6', 600:'#7c3aed' },
        fuchsia: { 400:'#e879f9', 500:'#d946ef' },
        cyan: { 400:'#22d3ee' },
        amber: { 400:'#fbbf24', 500:'#f59e0b' },
        pink: { 500:'#ec4899' },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(217,70,239,0.4)',
        'glow-cyan': '0 0 60px rgba(34,211,238,0.3)',
        'glow-violet': '0 0 80px rgba(139,92,246,0.4)',
      },
      backgroundImage: {
        'grid-faint': "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
