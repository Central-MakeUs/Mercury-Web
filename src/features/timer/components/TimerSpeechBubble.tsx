import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { Box } from "@repo/ui/Box";
import type { ComponentPropsWithoutRef } from "react";
import { getTimerSpeechBubbleText } from "../lib/getTimerSpeechBubbleText";
import { TIMER_ASSETS } from "../lib/timer.constants";
import { useTimerStore } from "../model/TimerProvider";

interface TimerSpeechBubbleProps extends ComponentPropsWithoutRef<"div"> {}

export const TimerSpeechBubble = (props: Omit<TimerSpeechBubbleProps, "children">) => {
  const { className, ...rest } = props;
  const status = useTimerStore((state) => state.status);

  return (
    <Box className={cn(" relative h-[60px] w-[186px]", className)} {...rest}>
      <AspectRatio className="w-[186px] h-[60px]" ratio={186 / 60}>
        <Image src={TIMER_ASSETS.SPEECH_BUBBLE_BG} alt="timer speech bubble background image" />
      </AspectRatio>
      <Text
        variant={"body/16_sb"}
        className=" absolute top-0 left-0 w-[186px] h-[42px] flex justify-center items-center text-yellow-green"
      >
        {getTimerSpeechBubbleText(status)}
      </Text>
    </Box>
  );
};
