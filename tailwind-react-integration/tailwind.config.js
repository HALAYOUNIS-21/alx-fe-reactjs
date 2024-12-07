/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Configure paths for all source files
  darkMode: "media", // Optional: Use "media" for system preference or "class" for manual toggling
  theme: {
    extend: {}, // Extend the default theme here if necessary
  },
  plugins: [
    require('@tailwindcss/forms'), // Plugin for better form styles
    require('@tailwindcss/typography'), // Plugin for better typography styles
  ],
};