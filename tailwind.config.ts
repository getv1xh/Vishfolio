import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"]
      },
      colors: {
        ink: "#050607",
        graphite: "#111417",
        silver: "#d6dde3",
        mist: "#8ea0ad",
        cyanice: "#7de3ff",
        water: "#5fb8e8"
      },
      boxShadow: {
        premium: "0 24px 90px rgba(0, 0, 0, 0.42)",
        line: "inset 0 1px 0 rgba(255,255,255,0.08)"
      }
    }
  },
  plugins: []
};

export default config;
