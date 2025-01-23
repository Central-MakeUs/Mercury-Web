import { animate, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

interface CounterProps {
  start?: number;
  to: number;
  duration?: number;
  isStart?: boolean;
}

const useAnimationCounter = ({ start = 0, to, duration = 1, isStart = true }: CounterProps) => {
  const count = useMotionValue(start);
  const formattedCount = useTransform(count, (latest) => {
    return new Intl.NumberFormat().format(Math.round(latest));
  });

  useEffect(() => {
    if (isStart) {
      const controls = animate(count, to, { duration });
      return controls.stop;
    }
  }, [count, duration, to, isStart]);

  return formattedCount;
};

export default useAnimationCounter;
