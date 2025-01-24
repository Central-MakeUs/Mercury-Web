import { usePreservedCallback } from "@xionwcfm/react";
import { useCallback, useRef, useState } from "react";
import { type ReactElement, cloneElement } from "react";

const usePress = (onPressComplete: () => void, context?: { delay?: number }) => {
  const delay = context?.delay ?? 2000;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isPressing, setIsPressing] = useState(false);
  const preservedOnPressComplete = usePreservedCallback(onPressComplete);

  const onPressStart = useCallback(() => {
    setIsPressing(true);
    timeoutRef.current = setTimeout(() => {
      preservedOnPressComplete();
    }, delay);
  }, [delay, preservedOnPressComplete]);

  const onPressStop = useCallback(() => {
    setIsPressing(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  return { onPressStart, onPressStop, isPressing };
};

export const Pressable = (props: {
  children: ReactElement;
  onPressComplete: () => void;
  delay: number;
}) => {
  const { children, onPressComplete, delay } = props;
  const { onPressStart, onPressStop, isPressing } = usePress(onPressComplete, { delay });

  return cloneElement(children, {
    onPointerDown: onPressStart,
    onPointerUp: onPressStop,
    onPointerLeave: onPressStop,
    onPointerCancel: onPressStop,
    "data-pressed": isPressing,
  });
};
