import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        primary: "#92DCE5",
        secondary: "#2B303A",
        error: "#FF0000",
      },

      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        raleway: ["var(--font-raleWay)"],
        grotesk: ["var(--font-grotesk)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
