import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // font-display -> Bodoni Moda (oversized headings)
        display: ["var(--font-bodoni)", "Bodoni Moda", "Georgia", "serif"],
        // font-sans (the default) -> Archivo
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
