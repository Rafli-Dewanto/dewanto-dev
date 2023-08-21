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
        "light-text": "#050002",
        "light-background": "#fff0f6",
        "light-primary": "#fd7c6d",
        "light-secondary": "#fee4be",
        "light-accent": "#ec8f04",
        "dark-text": "#ffffff",
        "dark-bg": "#362424",
        "dark-primary": "#fd7c6d",
        "dark-secondary": "#fee4be",
        "dark-accent": "#ec8f04",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
