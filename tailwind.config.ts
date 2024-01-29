import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "theme-first-color-alt": "#306AD9",
        "theme-first-color": "#4177DC",
        "theme-title-color": "#F1F2F3",
        "theme-text-color": "#BABEC4",
        "theme-text-color-light": "#888B91",
        "theme-body-color": "#0A0A0B",
        "theme-blur": "#374A6D80",
      },

    },
  },
  plugins: [],
};
export default config;
