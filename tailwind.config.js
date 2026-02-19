/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        accent: "#00F7FF", // Electric Cyan
        textMain: "#FFFFFF",
        
        // Academics Section Specific Colors
        'academics-bg': '#F7F6F2',
        'academics-surface': '#FFFFFF',
        'academics-border': '#E8E6E0',
        'academics-text': '#1A1A1A',
        'academics-text-secondary': '#6B6B6B',
        'academics-text-muted': '#9A9A9A',
        'academics-accent': '#00D4C8',
        'academics-success': '#2D9F6E',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        clash: ['"Clash Display"', 'sans-serif'],
      },
      // Adding custom neon shadows for the "Glowing" effect
      boxShadow: {
        'neon': '0 0 15px rgba(0, 247, 255, 0.4)',
        'neon-strong': '0 0 30px rgba(0, 247, 255, 0.7)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      }
    },
  },
  plugins: [],
};