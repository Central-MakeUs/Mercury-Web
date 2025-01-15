import { TIMER_STATUS } from "../model/timer.model";

import type { TimerStatus } from "../model/timer.model";

export const getTimerDescription = (status: TimerStatus) => {
  if (status === TIMER_STATUS.INIT) {
    return "타이머 시간을 설정해보세요!\n5분 ~ 25분 사이가 좋아요";
  }

  if (status === TIMER_STATUS.RUNNING) {
    return "독서에 집중하세요!";
  }

  if (status === TIMER_STATUS.PAUSED) {
    return "일시정지 중이에요";
  }

  if (status === TIMER_STATUS.COMPLETED) {
    return "설정한 시간이 끝났어요!\n축하해요!";
  }

  throw new Error("invalid timer status");
};
