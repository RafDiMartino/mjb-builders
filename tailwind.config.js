/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        charcoal: "var(--charcoal)",
        green: "var(--green)",
        lightgreen: "var(--light-green)",
      },
      maxWidth: {
        '8xl': '1400px',
      },
      boxShadow: {
        'primary': '0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 2px 16px rgba(0,0,0,0.11)',
        'secondary': '0 0px 0px rgba(0,0,0,0.11), 0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 3px 4px rgba(0,0,0,0.11), 0 1px 8px rgba(0,0,0,0.11)'
      },
      fontFamily: {
        header: ['var(--font-gotham-medium)'],
        copy: ['var(--font-poppins-medium)']
      },
    },
  },
  plugins: [],
};
