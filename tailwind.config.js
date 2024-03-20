/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: "hsl(75, 94%, 57%)",
        neutral: {
          50: "hsl(0, 0%, 100%)",
          500: "hsl(0, 0%, 20%)",
          900: "hsl(0, 0%, 12%)",
          950: "hsl(0, 0%, 8%)",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
