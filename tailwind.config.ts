/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontSize: {
      sm: [
        "0.7rem",
        {
          letterSpacing: "0.1em",
          fontWeight: "500",
        },
      ],
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    fontFamily: {
      MN: ["Montserrat", "sans-serif"],
      DM: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/2.png')",
        bu: "url('./src/assets/7.png')",
      },
      // Custom colors
      colors: {
        primary: {
          800: "#001a35", // dark blue
          700: "#002952", // medium blue
          900: "#041023",
        },
        accent: {
          600: "#c41e3a", // red
        },
      },
      // Custom spacing
      spacing: {
        128: "32rem",
      },
      // Custom fonts
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      // Custom breakpoints
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
