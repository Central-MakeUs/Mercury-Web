import { AspectRatio } from "@repo/design-system/AspectRatio";
import { BottomNavigationBar } from "@repo/design-system/BottomNavigationBar";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { CenterStack } from "@repo/ui/CenterStack";
import { Stack } from "@repo/ui/Stack";
import { TimerButtonSection } from "~/features/timer/components/TimerButtonSection";
import { TimerDescription } from "~/features/timer/components/TimerDescription";
import { TimerSpeechBubble } from "~/features/timer/components/TimerSpeechBubble";
import { TimerText } from "~/features/timer/components/TimerText";
import { TimerEffector } from "~/features/timer/model/TimerEffector";

import { TIMER_ASSETS } from "~/features/timer/lib/timer.constants";

export default function TimerPage() {
  return (
    <>
      <Stack className=" pt-[24px] justify-between w-full ">
        <Stack>
          <Text variant={"title/24_sb"} className=" px-[20px] text-gray-800 mb-[26px]">
            타이머
          </Text>

          <CenterStack>
            <TimerSpeechBubble className=" mb-[2px]" />
          </CenterStack>

          <CenterStack className=" w-full px-[46px] relative">
            <TimerText className=" absolute top-[42px] left-[50%] translate-x-[-50%] z-10" />

            <AspectRatio className=" w-full" ratio={1}>
              <Image src={TIMER_ASSETS.CHARACTER} alt="timer character" />
            </AspectRatio>
          </CenterStack>
        </Stack>

        <Stack>
          <CenterStack className=" text-center my-[32px]">
            <TimerDescription />
          </CenterStack>
          <CenterStack>
            <TimerButtonSection />
          </CenterStack>
          <BottomNavigationBar.Height className=" mb-[62.5px]" />
        </Stack>
      </Stack>

      <TimerEffector />
    </>
  );
}
