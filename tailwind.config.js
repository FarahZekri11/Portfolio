/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#02020a',
          900: '#05050e',
          800: '#09091a',
          700: '#0e0e22',
          600: '#13132a',
        },
        surface: {
          DEFAULT: '#0e0e22',
          hover:   '#14142e',
          card:    '#0b0b1e',
        },
        accent: {
          DEFAULT: '#7c3aed',
          light:   '#a78bfa',
          bright:  '#8b5cf6',
          glow:    'rgba(124,58,237,0.35)',
        },
        sky: {
          accent: '#0ea5e9',
          light:  '#38bdf8',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.07)',
          hover:   'rgba(124,58,237,0.45)',
          active:  'rgba(139,92,246,0.6)',
        },
        text: {
          primary:   '#f1f5f9',
          secondary: '#94a3b8',
          muted:     '#475569',
          dim:       '#334155',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      backgroundImage: {
        'grid-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cdefs%3E%3Cpattern id='g' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.04)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E")`,
        'dot-pattern':  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255,255,255,0.06)'/%3E%3C/svg%3E")`,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'glow-violet':  '0 0 30px rgba(124,58,237,0.3)',
        'glow-violet-lg': '0 0 60px rgba(124,58,237,0.4)',
        'glow-sky':     '0 0 30px rgba(14,165,233,0.25)',
        'card':         '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover':   '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(124,58,237,0.15)',
        'inner-glow':   'inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'orbit':      'orbit 20s linear infinite',
        'pulse-ring': 'pulse-ring 1.8s ease-out infinite',
        'shimmer':    'shimmer 2.5s linear infinite',
        'blink':      'blink 1s step-end infinite',
        'scan':       'scan 3s linear infinite',
        'slide-up':   'slideUp 0.5s ease-out',
        'fade-in':    'fadeIn 0.4s ease-out',
        'spin-slow':  'spin 8s linear infinite',
      },
      transitionTimingFunction: {
        'spring':  'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth':  'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
