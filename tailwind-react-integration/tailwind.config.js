module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // All files in the src folder
    "./public/index.html",        // Your public HTML file
  ],
  darkMode: "media", // Enable dark mode
  theme: {
    extend: {}, // Extend Tailwind's default theme
  },
  plugins: [], // Add plugins if needed
};