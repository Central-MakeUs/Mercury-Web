import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./packages/**/*.{ts,tsx}"],
  darkMode: "class",
  plugins: [animate],
};

export default config;
