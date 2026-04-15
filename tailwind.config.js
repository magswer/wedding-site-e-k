/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        salmon: {
          DEFAULT: '#E8947A',
          light:   '#F2B9A8',
          pale:    '#FBE9E3',
          dark:    '#C4724A',
        },
        sage: {
          DEFAULT: '#9BA888',
          light:   '#C8D4BE',
          pale:    '#EFF3EC',
          dark:    '#6B7D5A',
          deep:    '#4A5840',
        },
        cream: {
          DEFAULT: '#FAF7F3',
          dark:    '#F2EBE3',
        },
        ink: {
          DEFAULT: '#3C2A1E',
          mid:     '#6B5040',
          light:   '#A08878',
        },
      },
      fontFamily: {
        main:   ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      borderRadius: {
        'arch': '9999px 9999px 1.5rem 1.5rem',
      },
      animation: {
        'fade-up':      'fadeUp 1s ease both',
        'scroll-pulse': 'scrollPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.35' },
          '50%':      { opacity: '0.9'  },
        },
      },
    },
  },
  plugins: [],
}