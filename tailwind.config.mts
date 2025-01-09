import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import { vars } from "./packages/token";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./packages/**/*.{ts,tsx}", "./.storybook/**/*.{ts,tsx}"],
  theme: {
    colors: {
      ...vars.colors,
    },
    fontSize: {
      ...vars.fontSize,
    },
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
    },
  },

  darkMode: "class",
  plugins: [animate],
};

export default config;
