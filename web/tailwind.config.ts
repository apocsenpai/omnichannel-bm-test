import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-play)"],
      },
      colors: {
        primary: "#2A2C61",
        secondary: "#DB3F57",
        alternative: "#458CC7",
      },
    },
  },
  plugins: [],
};
export default config;
