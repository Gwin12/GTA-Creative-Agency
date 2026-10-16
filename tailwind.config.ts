import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#ffffff",
          foreground: "#0c0b0a",
          hover: "#e5e5e5",
        },
        secondary: {
          DEFAULT: "#fbbf24",
          foreground: "#0c0b0a",
          hover: "#f59e0b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
