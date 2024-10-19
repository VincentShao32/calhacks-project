/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "nunito-sans": ['Nunito Sans', 'sans-serif']
      },
      colors: {
        background: "#E8E8E8",
        foreground: "var(--foreground)",
        "primary": "#1383E5",
        "highlight": "#36454F",

      },
    },
  },
  plugins: [],
};
