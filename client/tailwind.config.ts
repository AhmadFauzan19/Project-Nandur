import { Righteous } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1A4D2E",
        secondary: "#4F6F52",
        gray: "#D9D9D9",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        righteous: ["var(--font-righteous)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
