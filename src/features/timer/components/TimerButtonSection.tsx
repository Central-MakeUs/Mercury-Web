import { bridge } from "@repo/bridge-web";
import { Button } from "@repo/design-system/Button";
import { timePickerBottomSheet } from "@repo/design-system/TimePickerBottomSheet";
import { TimePickerBottomSheet } from "@repo/design-system/TimePickerBottomSheet";
import { toast } from "@repo/design-system/Toast";
import { MercuryIcon } from "@repo/icon/MercuryIcon";
import { Flex } from "@repo/ui/Flex";
import { Iife } from "@repo/ui/Iife";
import { overlay } from "overlay-kit";
import type { ComponentProps } from "react";
import { useEffect, useRef } from "react";
import { usePostTimers } from "~/entities/timer/api/postTimers";
import { useTimerStore } from "../model/TimerProvider";
import { TIMER_STATUS } from "../model/timer.model";

export const TimerButtonSection = (props: ComponentProps<"div">) => {
  const { className, ...rest } = props;
  const status = useTimerStore((state) => state.status);
  const actions = useTimerStore((state) => state.actions);

  const closeRef = useRef<((result: any) => void) | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      if (closeRef.current) {
        closeRef.current(null);
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const openTimePickerBottomSheetWithHistory = async () => {
    window.history.pushState({ timePickerBottomSheet: true }, "");

    const result = await overlay.openAsync<{ left: number; right: number } | null>(
      ({ isOpen, close, unmount }) => {
        closeRef.current = close;
        return (
          <TimePickerBottomSheet
            {...timePickerBottomSheet.getMinuteAndSecondProps()}
            isOpen={isOpen}
            onClose={() => close(null)}
            onExit={unmount}
            onConfirm={(result) => {
              bridge.triggerHapticFeedback("impact-medium");
              close(result);
              setTimeout(() => unmount(), 1500);
            }}
          />
        );
      },
    );
    if (window.history.state?.timePickerBottomSheet) {
      window.history.back();
    }
    return result;
  };

  const openTimePickerBottomSheet = () => {
    openTimePickerBottomSheetWithHistory().then((result) => {
      if (result) {
        const { left: minute, right: second } = result;
        const totalSecond = minute * 60 + second;
        actions.start(totalSecond);
      }
    });
  };

  const handleStart = () => {
    openTimePickerBottomSheet();
  };

  const handlePause = () => {
    actions.pause();
  };

  const handleReset = () => {
    handlePause();
    openTimePickerBottomSheet();
  };

  const handleRestart = () => {
    actions.restart();
  };

  const { mutate: postTimer } = usePostTimers();
  const timer = useTimerStore();

  const handleComplete = () => {
    postTimer(
      { seconds: timer.settingSecond },
      {
        onSuccess: () => {
          toast.success("집중한만큼 보상을 얻었어요!", { icon: <MercuryIcon /> });
        },
        onSettled: () => {
          actions.reset();
        },
      },
    );
  };

  return (
    <Iife>
      {() => {
        switch (status) {
          case TIMER_STATUS.INIT:
            return (
              <Button size="medium" variant="primary" onClick={handleStart}>
                시간 설정하기
              </Button>
            );
          case TIMER_STATUS.RUNNING:
            return (
              <Flex className="gap-x-[18px]">
                <Button size="small" variant="gray" onClick={handleReset}>
                  재설정
                </Button>
                <Button size="small" variant="warning" onClick={handlePause}>
                  일시정지
                </Button>
              </Flex>
            );
          case TIMER_STATUS.PAUSED:
            return (
              <Flex className="gap-x-[18px]">
                <Button size="small" variant="gray" onClick={handleReset}>
                  재설정
                </Button>
                <Button size="small" variant="primary" onClick={handleRestart}>
                  계속하기
                </Button>
              </Flex>
            );
          case TIMER_STATUS.COMPLETED:
            return (
              <Button size="medium" variant="primary" onClick={handleComplete}>
                완료하기
              </Button>
            );
          default:
            return null;
        }
      }}
    </Iife>
  );
};
