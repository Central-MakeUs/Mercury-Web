export const timerQueryKeys = {
  all: () => ["timers"],
  getTimers: (userId: string) => [...timerQueryKeys.all(), userId],
};
