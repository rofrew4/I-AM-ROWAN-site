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
        ink: "#0A0A0A",
        muted: "#6B6B6B",
        placeholder: "#F0F0F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        body: ["17px", { lineHeight: "1.6" }],
      },
      maxWidth: {
        content: "640px",
      },
    },
  },
  plugins: [],
};

export default config;
