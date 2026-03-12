import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#07142A",
        navy2: "#0D2045",
        teal: "#0B7EA8",
        teal2: "#0FA3CF",
        gold: "#E8A030",
        gold2: "#F5C46A",
        green: "#1A8A50",
        green2: "#22B565",
        light: "#F4F7FB",
        offwhite: "#EEF3F9",
        muted: "#6B8299",
        border: "#D5E3EE",
        text: "#1A2B3C",
      },
      fontFamily: {
        display: ['"DM Serif Display"', "serif"],
        body: ['"Source Serif 4"', "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        card: "0 20px 60px rgba(0,0,0,0.1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
