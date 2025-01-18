import { useEffect, useRef } from "react";
import { useTimerStore } from "../model/TimerProvider";
import { TIMER_STATUS } from "../model/timer.model";

export const TimerEffector = () => {
  const startTimeRef = useRef<number>(0);
  const initialSecondRef = useRef<number>(0);
  const intervalIdRef = useRef<number | null>(null);
  const { status, settingSecond, currentSecond } = useTimerStore();
  const { updateCurrentSecond, updateStatus, syncTimeOnReentry } = useTimerStore(
    (state) => state.actions,
  );

  useEffect(() => {
    if (status === TIMER_STATUS.RUNNING) {
      syncTimeOnReentry();
    }
  }, [status, syncTimeOnReentry]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (status !== TIMER_STATUS.RUNNING) {
      if (intervalIdRef.current) {
        cancelAnimationFrame(intervalIdRef.current);
        intervalIdRef.current = null;
      }
      return;
    }

    initialSecondRef.current = currentSecond;
    startTimeRef.current = performance.now() - initialSecondRef.current * 1000;

    const updateTimer = (timestamp: number) => {
      const elapsedTime = Math.floor((timestamp - startTimeRef.current) / 1000);
      const newCurrentSecond = Math.min(elapsedTime, settingSecond);

      updateCurrentSecond(newCurrentSecond);

      if (newCurrentSecond >= settingSecond) {
        if (intervalIdRef.current) {
          cancelAnimationFrame(intervalIdRef.current);
        }
        intervalIdRef.current = null;
        updateStatus(TIMER_STATUS.COMPLETED);
        return;
      }

      intervalIdRef.current = requestAnimationFrame(updateTimer);
    };

    intervalIdRef.current = requestAnimationFrame(updateTimer);

    return () => {
      if (intervalIdRef.current) {
        cancelAnimationFrame(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    };
  }, [status, settingSecond, updateCurrentSecond, updateStatus]);

  return null;
};
