import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2c241f",
        mist: "#f8fcf4",
        sand: "#e7efe0",
        accent: "#7f9670",
        pine: "#edf6e3",
      },
      boxShadow: {
        card: "8px 8px 0 rgba(122, 136, 108, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;

