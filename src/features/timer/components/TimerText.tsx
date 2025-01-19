import { Text } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import type { ComponentProps } from "react";
import { useTimerStore } from "../model/TimerProvider";

export const TimerText = (props: ComponentProps<typeof Text>) => {
  const { className, ...rest } = props;
  const timer = useTimerStore();
  const content = formatTime(timer);
  return (
    <Text className={cn(" text-[32px] font-semibold text-gray-800", className)} {...rest}>
      {content}
    </Text>
  );
};

const formatTime = (props: { currentSecond: number; settingSecond: number }) => {
  const { currentSecond, settingSecond } = props;
  const remainingTime = settingSecond - currentSecond;
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
