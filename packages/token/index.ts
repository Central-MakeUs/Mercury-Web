export const MAX_WIDTH = "450px" as const;

export const scaleColors = {
  white: "#FFFFFF",
  "pastel-red": "#FF6767",
  "pastel-violet": "#A269FF",
  "white-pink": "#FEECED",
  "white-violet": "#F2E8FF",
  "dark-bg-violet": "#E3D1FF",
  green: "#00CD80",
  "aqua-green": "#5EE0AF",
  navy: "#191929",
  "white-yellow": "#FCFFE8",
  "yellow-green": "#EDFFD8",
  "white-green": "#EFF9EC",
  blue: "#8EFFFD",
  "warning-red": "#FF667D",
  "white-orange": "#FDE4D1",
  "dark-violet": "#554D9E",
  gray: {
    white: "#FFFFFF",
    100: "#F5F5F9",
    200: "#E8EAED",
    300: "#C6C6CF",
    400: "#90909F",
    500: "#555A6E",
    600: "#3E3E45",
    800: "#222228",
    1000: "#000000",
  },
  "main-gradient-from": "#FF6767",
  "main-gradient-to": "#A269FF",
  "main2-gradient-from": "#F2E8FF",
  "main2-gradient-via": "#5EE0AF",
  "main2-gradient-to": "#A269FF",
  "main3-gradient-from": "#5EE0AF",
  "main3-gradient-to": "#A269FF",
  "main4-gradient-from": "#7CACD2",
  "main4-gradient-to": "#A269FF",
  "sub-gradient-from": "#FEECED",
  "sub-gradient-to": "#F2E8FF",
  "gray-gradient-from": "#C6C6CF",
  "gray-gradient-to": "#F5F5F9",
};
export const semanticColors = {};

export const colors = {
  ...scaleColors,
  ...semanticColors,
};

export const fontSize = {
  "25": "1.5625rem",
  24: "1.5rem",
  20: "1.25rem",
  18: "1.125rem",
  16: "1rem",
  15: "0.9375rem",
  14: "0.875rem",
  12: "0.75rem",
};

export const scaleTransitionDuration = {
  "0": "0ms",
  "100": "100ms",
  "200": "200ms",
  "300": "300ms",
  "400": "400ms",
  "500": "500ms",
  "600": "600ms",
  "700": "700ms",
  "800": "800ms",
  "900": "900ms",
  "1000": "1000ms",
};

export const keyframes = {
  "fade-in": {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },
  "fade-out": {
    "0%": { opacity: "1" },
    "100%": { opacity: "0" },
  },
};

export const animation = {
  "fade-in-200": "fade-in 200ms ease-in-out",
  "fade-in-500": "fade-in 500ms ease-in-out",
  "fade-in-1000": "fade-in 1000ms ease-in-out",
  "fade-in-1500": "fade-in 1500ms ease-in-out",
  "fade-in-2000": "fade-in 2000ms ease-in-out",
  "fade-out-200": "fade-out 200ms ease-in-out",
  "fade-out-500": "fade-out 500ms ease-in-out",
  "fade-out-1000": "fade-out 1000ms ease-in-out",
  "fade-out-1500": "fade-out 1500ms ease-in-out",
  "fade-out-2000": "fade-out 2000ms ease-in-out",
};

export const semanticTransitionDuration = {
  header: scaleTransitionDuration[300],
};

export const transitionDuration = {
  ...scaleTransitionDuration,
  ...semanticTransitionDuration,
};

export const vars = {
  colors,
  fontSize,
  transitionDuration,
  keyframes,
  animation,
};
