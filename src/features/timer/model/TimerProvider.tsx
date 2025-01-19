import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { TIMER_STATUS, type TimerStatus } from "./timer.model";

interface TimerState {
  status: TimerStatus;
  settingSecond: number;
  currentSecond: number;
  lastAccessTime: string | null;
}

interface TimerActions {
  actions: {
    reset: () => void;
    start: (second: number) => void;
    restart: () => void;
    pause: () => void;
    syncTimeOnReentry: () => void;
    updateCurrentSecond: (second: number) => void;
    updateStatus: (status: TimerStatus) => void;
  };
}

const TIMER_STATE_KEY = "@mercury/timer_state";

export const useTimerStore = create(
  persist<TimerState & TimerActions>(
    (set) => ({
      status: TIMER_STATUS.INIT,
      settingSecond: 0,
      currentSecond: 0,
      lastAccessTime: null,

      actions: {
        reset: () => {
          set({
            status: TIMER_STATUS.INIT,
            settingSecond: 0,
            currentSecond: 0,
            lastAccessTime: null,
          });
        },

        start: (second: number) => {
          set({
            settingSecond: second,
            currentSecond: 0,
            status: TIMER_STATUS.RUNNING,
            lastAccessTime: new Date().toISOString(),
          });
        },

        restart: () => {
          set({
            status: TIMER_STATUS.RUNNING,
            lastAccessTime: new Date().toISOString(),
          });
        },

        pause: () => {
          set({
            status: TIMER_STATUS.PAUSED,
            lastAccessTime: new Date().toISOString(),
          });
        },

        syncTimeOnReentry: () => {
          set((state) => {
            if (state.status !== TIMER_STATUS.RUNNING || !state.lastAccessTime) {
              return state;
            }

            const lastAccess = new Date(state.lastAccessTime).getTime();
            // biome-ignore lint/complexity/useDateNow: <explanation>
            const now = new Date().getTime();
            const elapsedSeconds = Math.floor((now - lastAccess) / 1000);
            const newCurrentSecond = Math.min(
              state.currentSecond + elapsedSeconds,
              state.settingSecond,
            );

            return {
              ...state,
              currentSecond: newCurrentSecond,
              status:
                newCurrentSecond < state.settingSecond
                  ? TIMER_STATUS.RUNNING
                  : TIMER_STATUS.COMPLETED,
              lastAccessTime: new Date().toISOString(),
            };
          });
        },

        updateCurrentSecond: (second: number) => {
          set({ currentSecond: second });
        },

        updateStatus: (status: TimerStatus) => {
          set({ status });
        },
      },
    }),
    {
      name: TIMER_STATE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => {
        const { actions, ...serializableState } = state;
        return serializableState as TimerState & TimerActions;
      },
    },
  ),
);
