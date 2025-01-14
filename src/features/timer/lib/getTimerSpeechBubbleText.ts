import { TIMER_STATUS, type TimerStatus } from "../model/timer.model";

export const getTimerSpeechBubbleText = (status: TimerStatus) => {
  if (status === TIMER_STATUS.INIT) {
    return "집중해서 책을 읽어볼까?";
  }

  if (status === TIMER_STATUS.RUNNING) {
    return "잘 하고 있어요!";
  }

  if (status === TIMER_STATUS.PAUSED) {
    return "잠시 멈췄어요!";
  }

  if (status === TIMER_STATUS.COMPLETED) {
    return "최고예요!";
  }

  throw new Error("invalid timer status");
};
