import { animate, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

interface CounterProps {
  start?: number;
  to: number;
  duration?: number;
  isStart?: boolean;
  delay?: number;
}

const useAnimationCounter = ({
  start = 0,
  to,
  duration = 1,
  isStart = true,
  delay,
}: CounterProps) => {
  const count = useMotionValue(start);
  const formattedCount = useTransform(count, (latest) => {
    return new Intl.NumberFormat().format(Math.round(latest));
  });

  useEffect(() => {
    if (isStart) {
      const controls = animate(count, to, { duration, delay });
      return controls.stop;
    }
  }, [count, duration, to, isStart, delay]);

  return formattedCount;
};

export default useAnimationCounter;
