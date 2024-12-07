/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include your index.html file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all files in the src folder
  ],
  theme: {
    extend: {}, // Use this to customize or extend the default theme
  },
  plugins: [], // Add Tailwind plugins here, if needed
};