/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
        writingText: {
          from: {
            opacity: "0%",
          },
          to: {
            "width": "100%",
            "opacity": "100%"
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
        },
        slideInFromRight: {
          from: {
            transform: "translateX(10%)",
            opacity: "0%",
          },
          to: {
            transform: "translateX(0%)",
            opacity: "100%",
          }
        },
        beat: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
          "100%": {
            transform: "scale(1)",
          }
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        slideInFromBottom: "slideInFromBottom 650ms linear forwards",
        slideInFromTop: "slideInFromTop 650ms linear forwards",
        slideInFromRight: "slideInFromRight 650ms linear forwards",
        ripple: 'ripple 600ms linear forwards',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        writingText: "writingText 500ms linear forwards",
        beat: "beat 2s linear infinite"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
