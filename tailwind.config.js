/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './dist/index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'purple-animation': 'animationGradient 2s ease alternate infinite',
        'spin-slow': 'spin 5s linear infinite',
        'text-gradient': 'animationText ease-in-out 9s infinite',
      },
      keyframes: {
        animationGradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '50% 100%' },
          '100%': { 'background-position': '100% 0%' },
        },
        animationText: {
          '0%, 16.667%, 100%': { opacity: 1 },
          '33.333%, 83.333%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
