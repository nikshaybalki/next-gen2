/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        accent: "#00F7FF", // Electric Cyan
        textMain: "#FFFFFF",
      },
      // Adding custom neon shadows for the "Glowing" effect
      boxShadow: {
        'neon': '0 0 15px rgba(0, 247, 255, 0.4)',
        'neon-strong': '0 0 30px rgba(0, 247, 255, 0.7)',
      }
    },
  },
  plugins: [],
};