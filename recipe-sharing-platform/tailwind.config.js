/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Define file paths for purging unused styles
  darkMode: false, // Optional: Set to 'media' or 'class' if you want dark mode support
  theme: {
    extend: {}, // Extend Tailwind's default theme if needed
  },
  plugins: [], // Add plugins here if required later
};