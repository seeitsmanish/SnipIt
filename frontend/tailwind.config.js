/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'dots-pattern': 'radial-gradient(grey 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots-size': '75px 75px',
      },

      keyframes: {
        slideInFromBottom: {
          from: {
            transform: "translateY(25%)",
            opacity: "0%",
          },
          to: {
            transform: "translateY(0%)",
            opacity: "100%",
          }
        },
        ripple: {
          to: {
            transform: "scale(4)",
            opacity: '0'
          }
        },
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
        slideInFromBottom: "slideInFromBottom 650ms linear forwards",
        slideInFromTop: "slideInFromTop 650ms linear forwards",
        ripple: 'ripple 600ms linear forwards'
      }
    },
  },
  plugins: [],
}