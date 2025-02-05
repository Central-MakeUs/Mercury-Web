export const isApp = () => {
  return typeof window !== "undefined" && typeof window?.ReactNativeWebView !== "undefined";
};
