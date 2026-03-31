import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1a1816",
        mist: "#f7f1e8",
        sand: "#ead9c5",
        accent: "#a95f3b",
        pine: "#32524d",
      },
      boxShadow: {
        card: "0 18px 45px rgba(44, 35, 26, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;

