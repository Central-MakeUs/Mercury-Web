import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Button } from "@repo/design-system/Button";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { CenterStack } from "@repo/ui/CenterStack";
import { Stack } from "@repo/ui/Stack";
import { TimerSpeechBubble } from "~/features/timer/components/TimerSpeechBubble";
import { getTimerDescription } from "~/features/timer/lib/getTimerDescription";
import { TIMER_ASSETS } from "~/features/timer/lib/timer.constants";
import { TIMER_STATUS } from "~/features/timer/model/timer.model";

export default function TimerPage() {
  return (
    <Stack className=" pt-[24px] w-full">
      <Text variant={"title/24_sb"} className=" px-[20px] text-gray-800 mb-[26px]">
        타이머
      </Text>

      <CenterStack>
        <TimerSpeechBubble className=" mb-[2px]">집중해서 책을 읽어볼까?</TimerSpeechBubble>
      </CenterStack>

      <CenterStack className=" w-full px-[46px]">
        <AspectRatio className=" w-full" ratio={1}>
          <Image src={TIMER_ASSETS.CHARACTER} alt="timer character" />
        </AspectRatio>
      </CenterStack>

      <CenterStack className=" text-center my-[32px]">
        <Text variant={"body/18_m"} className=" text-gray-1000 whitespace-pre-wrap">
          {getTimerDescription(TIMER_STATUS.INIT)}
        </Text>
      </CenterStack>

      <CenterStack>
        <Button size="medium" variant="primary">
          시간 설정하기
        </Button>
      </CenterStack>
    </Stack>
  );
}
