import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      maxWidth: {
        '8xl': '1500px',
      },
    },
  },
  plugins: [],
};
export default config;
