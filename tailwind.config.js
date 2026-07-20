/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          900: '#040812',
          950: '#020814',
        },
        purple: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3f0f5c',
        },
        cyan: {
          50: '#ecf9ff',
          100: '#d4f1ff',
          200: '#a9e4ff',
          300: '#7dd3ff',
          400: '#4fbdff',
          500: '#25a0da',
          600: '#1a7fa0',
          700: '#125f75',
          800: '#0d4d62',
          900: '#0a3d4f',
          950: '#051e27',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Google Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(124, 140, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(124, 140, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
