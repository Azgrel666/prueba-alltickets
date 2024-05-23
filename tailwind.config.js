/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {

    extend: {

      fontFamily:
      {
        raleway:["Raleway", "sans-serif"],
        karla:["Karla", "sans-serif"],
      },

      colors: {
        primary: {
          DEFAULT: "#181F39",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#4459A5",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#A596C8",
          foreground: "hsl(var(--accent-foreground))",
        },
      },

    },
  },
  plugins: [],
}

