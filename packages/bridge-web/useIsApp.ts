import { useSyncExternalStore } from "react";
import { isApp } from "./isApp";

export const useIsApp = () => {
  const getSnapshot = () => {
    return isApp();
  };

  const subscribe = (_callback: () => void) => {
    return () => {};
  };

  return useSyncExternalStore(subscribe, getSnapshot);
};
