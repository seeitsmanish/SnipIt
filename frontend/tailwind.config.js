/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dots-pattern': 'radial-gradient(grey 2px, transparent 2px)',
      },
      backgroundSize: {
        'dots-size': '75px 75px',
      },

      keyframes: {
        slideInFromTop: {
          from: {
            transform: "translateY(-50%)",
            opacity: "0%",
          },
          to: {
            transform: "translateY(0%)",
            opacity: "100%",
          }
        }
      },
      animation: {
        slideInFromTop: 'slideInFromTop 800ms linear forwards'
      }
    },
  },
  plugins: [],
}