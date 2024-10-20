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
        background: "#0e1015",
        //background: "#E8E8E8",
        foreground: "var(--foreground)",
        // "primary": "#1383E5",
        "primary": "#6038fb",
        //"primary": "#CEA3FF",
        "highlight": "#36454F",
        "secondary": "#60a4fb"

      },
    },
  },
  plugins: [],
};
