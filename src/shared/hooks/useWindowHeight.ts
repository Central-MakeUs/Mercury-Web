import { useSyncExternalStore } from "react";

const DEBOUNCE_DELAY = 100;

const useWindowHeight = () => {
  const subscribe = (callback: () => void) => {
    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(callback, DEBOUNCE_DELAY);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  };

  const getSnapshot = () => {
    return window.innerHeight;
  };

  const getServerSnapshot = () => {
    return 0; // SSR에서의 기본값
  };

  const height = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return height;
};

export default useWindowHeight;
