import type { Config } from "tailwindcss";
import animate from "tailwindcss-animated";
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
    transitionDuration: {
      ...vars.transitionDuration,
    },
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      keyframes: {
        ...vars.keyframes,
      },
      animation: {
        ...vars.animation,
      },
      screens: {
        short: { raw: "(max-height: 700px)" },
      },
    },
  },

  darkMode: "class",
  plugins: [animate],
};

export default config;
