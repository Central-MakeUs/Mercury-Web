import { AspectRatio } from "@repo/design-system/AspectRatio";
import { BottomNavigationBar } from "@repo/design-system/BottomNavigationBar";
import { Button } from "@repo/design-system/Button";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { CenterStack } from "@repo/ui/CenterStack";
import { Stack } from "@repo/ui/Stack";
import { TimerSpeechBubble } from "~/features/timer/components/TimerSpeechBubble";
import { getTimerDescription } from "~/features/timer/lib/getTimerDescription";
import { getTimerSpeechBubbleText } from "~/features/timer/lib/getTimerSpeechBubbleText";
import { TIMER_ASSETS } from "~/features/timer/lib/timer.constants";
import { TIMER_STATUS } from "~/features/timer/model/timer.model";

export default function TimerPage() {
  return (
    <Stack className=" pt-[24px] justify-between w-full ">
      <Stack>
        <Text variant={"title/24_sb"} className=" px-[20px] text-gray-800 mb-[26px]">
          타이머
        </Text>

        <CenterStack>
          <TimerSpeechBubble className=" mb-[2px]">
            {getTimerSpeechBubbleText(TIMER_STATUS.INIT)}
          </TimerSpeechBubble>
        </CenterStack>

        <CenterStack className=" w-full px-[46px]">
          <AspectRatio className=" w-full" ratio={1}>
            <Image src={TIMER_ASSETS.CHARACTER} alt="timer character" />
          </AspectRatio>
        </CenterStack>
      </Stack>

      <Stack>
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
        <BottomNavigationBar.Height className=" mb-[62.5px]" />
      </Stack>
    </Stack>
  );
}
