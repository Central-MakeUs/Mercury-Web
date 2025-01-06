export const semanticColors = {
  primary: {
    pastelRed: "#FF6767",
    pastelViolet: "#A269FF",
    whitePink: "#FEECED",
    whiteViolet: "#F2E8FF",
    green: "#00CD80",
    aquaGreen: "#5EE0AF",
    navy: "#00CD80",
    whiteYellow: "#FCFFE8",
    yellowGreen: "#EDFFD8",
    whiteGreen: "#EFF9EC",
    blue: "##8EFFFD",
    warningRed: "#FF667D",
    whiteOrange: "#FDE4D1",
  },
};

export const gradient = {
  gradient: {
    main: "linear-gradient(to right, #FF6767 0%, #A269FF 100%)",
    main2: "linear-gradient(to right, #F2E8FF 0%, #5EE0AF 50%, #A269FF 100%)",
    sub: "linear-gradient(to right, #FEECED 0%, #F2E8FF 100%)",
    gray: "linear-gradient(to right, #C6C6CF 0%, #F5F5F9 100%)",
  },
};

export const scaleColors = {
  0: "#FFFFFF",
  100: "#F5F5F9",
  200: "#E8EAED",
  300: "#C6C6CF",
  400: "#90909F",
  500: "#555A6E",
  600: "#3E3E45",
  800: "#222228",
  1000: "#000000",
};

export const colors = {
  ...scaleColors,
  ...semanticColors.primary,
  ...gradient.gradient,
};

export const fontSize = {
  "1": "0.75rem",
  "2": "0.875rem",
  "3": "1rem",
  "4": "1.25rem",
  "5": "1.5rem",
  "6": "2rem",
  "7": "3rem",
};

export const vars = {
  colors,
  fontSize,
};
