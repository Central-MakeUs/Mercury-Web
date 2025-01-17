import { useThrottle } from "@xionwcfm/react";
import { useEffect, useState } from "react";

export const useIsScrollTop = (context?: { threshold?: number; delay?: number }) => {
  const [isNotAtTop, setIsNotAtTop] = useState(true);

  const throttled = useThrottle(() => {
    const scrollTop = window.scrollY;
    setIsNotAtTop(scrollTop < (context?.threshold ?? 0));
  }, context?.delay ?? 0);

  useEffect(() => {
    window.addEventListener("scroll", throttled);

    return () => {
      window.removeEventListener("scroll", throttled);
    };
  }, [throttled]);

  return isNotAtTop;
};
