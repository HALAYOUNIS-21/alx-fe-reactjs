/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Ensure unused styles are removed in production
  darkMode: "media", // Enable dark mode support
  theme: {
    extend: {}, // Extend Tailwind's default theme
  },
  variants: {
    extend: {}, // Extend Tailwind's default variants
  },
  plugins: [], // Add plugins if needed
};