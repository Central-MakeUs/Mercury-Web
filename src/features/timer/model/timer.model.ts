export const TIMER_STATUS = {
  INIT: "INIT",
  RUNNING: "RUNNING",
  PAUSED: "PAUSED",
  COMPLETED: "COMPLETED",
} as const;

export type TimerStatus = (typeof TIMER_STATUS)[keyof typeof TIMER_STATUS];
