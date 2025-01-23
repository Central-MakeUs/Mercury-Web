import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { NotificationBadge } from "@repo/design-system/NotificationBadge";
import { Text } from "@repo/design-system/Text";
import { CenterStack } from "@repo/ui/CenterStack";
import { Flex } from "@repo/ui/Flex";
import { JustifyBetween } from "@repo/ui/JustifyBetween";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { motion } from "motion/react";
import useAnimationCounter from "~/shared/hooks/useAnimationCounter";

export default function HomePage() {
  const level = useAnimationCounter({ to: 9, start: 0, duration: 1, isStart: false });
  const _exp = useAnimationCounter({ to: 2100, start: 0, duration: 1, isStart: false });

  return (
    <Stack className="  w-full">
      <JustifyBetween className=" pb-[30px] pt-[24px] bg-white w-full px-[16px]">
        <Flex className=" w-[161px] h-[32px]">
          <AspectRatio ratio={161 / 32}>
            <Image src={HOME_ASSETS.HOME_LOGO} alt="home_logo" objectfit={"fill"} />
          </AspectRatio>
        </Flex>
        <NotificationBadge.Button>
          <NotificationBadge.Icon />
        </NotificationBadge.Button>
      </JustifyBetween>
      <CenterStack className=" w-full bg-navy">
        <AspectRatio ratio={375 / 343} className=" flex justify-center items-center">
          <Image src={HOME_ASSETS.HOME_MERCURY} alt="mercury character" objectfit={"fill"} />
        </AspectRatio>
      </CenterStack>
      <Spacing className=" h-[16px]" />

      <Stack className=" w-full pl-[16px] pr-[20px]">
        <Flex className=" gap-x-4">
          <Text variant={"body/18_sb"} className=" text-[#393F46]">
            <motion.span>{level}</motion.span>
          </Text>
        </Flex>
      </Stack>
    </Stack>
  );
}

const HOME_ASSETS = {
  HOME_LOGO: "/images/home/home_logo.webp",
  HOME_MERCURY: "/images/home/home_mercury.webp",
};
