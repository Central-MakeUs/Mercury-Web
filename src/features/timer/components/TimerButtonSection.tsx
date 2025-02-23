import { Button } from "@repo/design-system/Button";
import { timePickerBottomSheet } from "@repo/design-system/TimePickerBottomSheet";
import { toast } from "@repo/design-system/Toast";
import { MercuryIcon } from "@repo/icon/MercuryIcon";
import { Flex } from "@repo/ui/Flex";
import { Iife } from "@repo/ui/Iife";
import type { ComponentProps } from "react";
import { usePostTimers } from "~/entities/timer/api/postTimers";
import { useTimerStore } from "../model/TimerProvider";
import { TIMER_STATUS } from "../model/timer.model";

export const TimerButtonSection = (props: ComponentProps<"div">) => {
  const { className, ...rest } = props;
  const status = useTimerStore((state) => state.status);
  const actions = useTimerStore((state) => state.actions);

  const handleStart = () => {
    timePickerBottomSheet.openAsync({
      ...timePickerBottomSheet.getMinuteAndSecondProps(),
      onConfirm: (result) => {
        const { left: minute, right: second } = result;
        const totalSecond = minute * 60 + second;
        actions.start(totalSecond);
      },
    });
  };

  const handlePause = () => {
    actions.pause();
  };

  const handleReset = () => {
    timePickerBottomSheet.openAsync({
      ...timePickerBottomSheet.getMinuteAndSecondProps(),
      onConfirm: (result) => {
        const { left: minute, right: second } = result;
        const totalSecond = minute * 60 + second;
        actions.start(totalSecond);
      },
    });
  };

  const handleRestart = () => {
    actions.restart();
  };

  const { mutate: postTimer } = usePostTimers();
  const timer = useTimerStore();

  const handleComplete = () => {
    postTimer({ seconds: timer.settingSecond });

    toast.success("집중한만큼 보상을 얻었어요!", { icon: <MercuryIcon /> });
    actions.reset();
  };

  return (
    <Iife>
      {() => {
        switch (status) {
          case TIMER_STATUS.INIT: {
            return (
              <Button size="medium" variant="primary" onClick={handleStart}>
                시간 설정하기
              </Button>
            );
          }
          case TIMER_STATUS.RUNNING: {
            return (
              <Flex className=" gap-x-[18px]">
                <Button size="small" variant="gray" onClick={handleReset}>
                  재설정
                </Button>
                <Button size="small" variant="warning" onClick={handlePause}>
                  일시정지
                </Button>
              </Flex>
            );
          }
          case TIMER_STATUS.PAUSED: {
            return (
              <Flex className=" gap-x-[18px]">
                <Button size="small" variant="gray" onClick={handleReset}>
                  재설정
                </Button>
                <Button size="small" variant="primary" onClick={handleRestart}>
                  계속하기
                </Button>
              </Flex>
            );
          }
          case TIMER_STATUS.COMPLETED: {
            return (
              <Button size="medium" variant="primary" onClick={handleComplete}>
                완료하기
              </Button>
            );
          }
          default: {
            return null;
          }
        }
      }}
    </Iife>
  );
};
