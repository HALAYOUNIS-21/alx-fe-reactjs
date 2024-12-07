/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",             // Scan the index.html file
    "./src/**/*.{js,jsx,ts,tsx}" // Scan all files in the src folder
  ],
  darkMode: "class", // Optional: Enables class-based dark mode (e.g., 'dark:bg-black')
  theme: {
    extend: {}, // Use this to extend the default theme if needed
  },
  plugins: [], // Add any Tailwind CSS plugins here
};