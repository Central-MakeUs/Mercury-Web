import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { NotificationBadge } from "@repo/design-system/NotificationBadge";
import { toast } from "@repo/design-system/Toast";
import { CenterStack } from "@repo/ui/CenterStack";
import { Flex } from "@repo/ui/Flex";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { motion } from "motion/react";
import { HabitSection } from "~/features/userExp/HabitSection";

export default function HomePage() {
  return (
    <Stack className="  w-full">
      <Header />
      <MainSection />
      <Spacing className=" h-[16px]" />

      <HabitSection />
      <Spacing className=" h-[160px]" />
    </Stack>
  );
}

const Header = () => {
  return (
    <motion.div
      className=" flex justify-between pb-[30px] pt-[24px] bg-white w-full px-[16px]"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Flex className=" w-[161px] h-[32px]">
        <AspectRatio ratio={161 / 32}>
          <Image src={HOME_ASSETS.HOME_LOGO} alt="home_logo" objectfit={"fill"} />
        </AspectRatio>
      </Flex>

      <NotificationBadge.Button
        onClick={() => {
          toast.main("준비중인 기능이에요", { duration: 1500 });
        }}
      >
        <NotificationBadge.Icon />
      </NotificationBadge.Button>
    </motion.div>
  );
};

const MainSection = () => {
  return (
    <CenterStack className=" w-full bg-navy">
      <motion.div
        className=" w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <AspectRatio ratio={375 / 343} className=" flex justify-center items-center">
          <Image src={HOME_ASSETS.HOME_MERCURY} alt="mercury character" objectfit={"fill"} />
        </AspectRatio>
      </motion.div>
    </CenterStack>
  );
};

const HOME_ASSETS = {
  HOME_LOGO: "/images/home/home_logo.webp",
  HOME_MERCURY: "/images/home/home_mercury.webp",
};
