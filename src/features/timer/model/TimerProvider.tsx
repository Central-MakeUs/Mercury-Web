import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { TIMER_STATUS, type TimerStatus } from "./timer.model";

interface TimerState {
  status: TimerStatus;
  second: number;
}

type ActionResult = { ok: boolean; reason: string };

interface TimerActions {
  actions: {
    reset: () => ActionResult;
    start: () => ActionResult;
    pause: () => ActionResult;
    updateTime: (newSecond: number) => ActionResult;
  };
}

const TIMER_STATE_KEY = "@mercury/timer_state";

export const useTimerStore = create(
  persist<TimerState & TimerActions>(
    (set) => ({
      status: TIMER_STATUS.INIT,
      second: 0,
      actions: {
        reset: () => {
          set({
            status: TIMER_STATUS.INIT,
            second: 0,
          });
          return { ok: true, reason: "" };
        },

        start: () => {
          let ok = true;
          let _reason = "";

          set((prev) => {
            if (prev.status === TIMER_STATUS.INIT || prev.status === TIMER_STATUS.PAUSED) {
              return {
                status: TIMER_STATUS.RUNNING,
                second: prev.second,
              };
            }

            ok = false;
            _reason = "Timer Is Already Running Or Completed";

            return {
              status: prev.status,
              second: prev.second,
            };
          });
          return { ok, reason: "" };
        },

        pause: () => {
          let ok = true;
          let reason = "";
          set((prev) => {
            if (prev.status !== TIMER_STATUS.RUNNING) {
              ok = false;
              reason = "Timer Is Not Running";
              return {
                status: prev.status,
                second: prev.second,
              };
            }

            return {
              status: TIMER_STATUS.PAUSED,
              second: prev.second,
            };
          });
          return { ok, reason };
        },

        updateTime: (newSecond: number) => {
          set((prev) => {
            let _ok = true;
            let _reason = "";

            if (prev.status !== TIMER_STATUS.RUNNING) {
              _ok = false;
              _reason = "Timer Is Not Running";

              return {
                status: prev.status,
                second: prev.second,
              };
            }

            return {
              status: prev.status,
              second: newSecond,
            };
          });
          return { ok: true, reason: "" };
        },
      },
    }),
    {
      name: TIMER_STATE_KEY,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
