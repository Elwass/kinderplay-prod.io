/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D98956",
        text: "#6F5F52",
        beige: "#F6EFE7",
        blue: "#C0D5E7",
      },
      fontFamily: {
        fredoka: ["Fredoka", "sans-serif"],
      },
    },
  },
  plugins: [],
};
