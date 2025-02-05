export declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
    __APP_DEV__: "production" | "development";
  }
}
