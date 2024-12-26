/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bolt: {
          purple: '#6D28D9',
          blue: '#1E40AF',
          dark: '#111827',
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            800: '#1F2937',
            900: '#111827'
          }
        }
      }
    },
  },
  plugins: [],
};