import { Spacing } from "@repo/ui/Spacing";
import { motion } from "motion/react";
import { overlay } from "overlay-kit";
import { useRef } from "react";
import { BottomSheet } from "./BottomSheet";
import { CtaButton } from "./CtaButton";
import { IosTimePicker } from "./IosTimePicker";
import { Text } from "./Text";

type TimePickerBottomSheetProps = {
  isOpen?: boolean;
  onClose?: () => void;
  onExit?: () => void;
  exitDelay?: number;
  left?: number;
  leftLabel: string;
  leftSlideCount: number;
  rightLabel: string;
  right?: number;
  rightSlideCount: number;
  onLeftChange?: (minute: number) => void;
  onRightChange?: (second: number) => void;
  onConfirm?: (props: { left: number; right: number }) => void;
};

const DEFAULT_EXIT_DELAY = 1500;

export const TimePickerBottomSheet = (props: TimePickerBottomSheetProps) => {
  const { isOpen, exitDelay = DEFAULT_EXIT_DELAY, onClose, onExit } = props;
  const _left = useRef(props.left ?? 0);
  const _right = useRef(props.right ?? 0);

  const onRightChange = (second: number) => {
    _right.current = second;
    props.onRightChange?.(second);
  };

  const onLeftChange = (minute: number) => {
    _left.current = minute;
    props.onLeftChange?.(minute);
  };

  return (
    <BottomSheet.Root
      handleOnly={true}
      open={isOpen}
      onOpenChange={() => {
        onClose?.();
        setTimeout(() => onExit?.(), exitDelay);
      }}
    >
      <BottomSheet.Portal>
        <BottomSheet.Overlay />
        <BottomSheet.Content className=" flex items-center flex-col pt-[16px] px-[20px] rounded-t-[20px] h-[400px] bg-gray-white">
          <BottomSheet.Handle className=" mb-[16px]" />
          <BottomSheet.Description className=" sr-only">
            타이머의 시간을 설정합니다.
          </BottomSheet.Description>
          <BottomSheet.Title asChild={true}>
            <Text variant={"title/20_sb"} className=" text-gray-600">
              시간 설정하기
            </Text>
          </BottomSheet.Title>
          <motion.div
            className=" flex flex-col mt-[14px] mb-[20px] h-[160px] w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <IosTimePicker.Layout>
              <IosTimePicker
                slideCount={props.leftSlideCount}
                value={props.left ?? _left.current}
                onChange={onLeftChange}
                perspective="left"
                label={props.leftLabel}
              />
              <IosTimePicker
                slideCount={props.rightSlideCount}
                value={props.right ?? _right.current}
                onChange={onRightChange}
                perspective="right"
                label={props.rightLabel}
              />
            </IosTimePicker.Layout>
          </motion.div>
          <Spacing className=" h-[32px]" />
          <CtaButton
            className=" z-[1]"
            onClick={() => {
              const left =
                props.onLeftChange && typeof props.left === "number" ? props.left : _left.current;
              const right =
                props.onRightChange && typeof props.right === "number"
                  ? props.right
                  : _right.current;
              props.onConfirm?.({ left, right });
            }}
          >
            시작
          </CtaButton>
        </BottomSheet.Content>
      </BottomSheet.Portal>
    </BottomSheet.Root>
  );
};

export const timePickerBottomSheet = {
  getMinuteAndSecondProps: () => ({
    leftLabel: "분",
    leftSlideCount: 61,
    rightLabel: "초",
    rightSlideCount: 60,
  }),
  openAsync: async (props: Omit<TimePickerBottomSheetProps, "isOpen" | "onClose" | "onExit">) => {
    const { onConfirm, ...rest } = props ?? {};
    return overlay.openAsync<{ left: number; right: number } | null>(
      ({ isOpen, close, unmount }) => (
        <TimePickerBottomSheet
          {...rest}
          isOpen={isOpen}
          onClose={() => close(null)}
          onExit={unmount}
          onConfirm={(result) => {
            onConfirm?.(result);
            close(result);
            setTimeout(() => unmount(), DEFAULT_EXIT_DELAY);
          }}
        />
      ),
    );
  },
};
