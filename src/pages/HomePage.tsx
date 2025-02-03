import { AspectRatio } from "@repo/design-system/AspectRatio";
import { NotificationBadge } from "@repo/design-system/NotificationBadge";
import { SettingsBadge } from "@repo/design-system/SettingsBadge";
import { Text } from "@repo/design-system/Text";
import { toast } from "@repo/design-system/Toast";
import { Flex } from "@repo/ui/Flex";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { motion } from "motion/react";
import { HabitSection } from "~/features/userExp/HabitSection";
import { MainSection } from "~/features/userInfo/UserInfoSection";

export default function HomePage() {
  return (
    <Stack className="  w-full">
      <Header />
      <MainSection />

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
          <Text variant={"title/24_sb"} className="text-gray-800">
            마이페이지
          </Text>
        </AspectRatio>
      </Flex>

      <Flex className="gap-[17px]">
        <NotificationBadge.Button
          onClick={() => {
            toast.main("준비중인 기능이에요", { duration: 1500 });
          }}
        >
          <NotificationBadge.Icon />
        </NotificationBadge.Button>

        <SettingsBadge.Button
          onClick={() => {
            toast.main("셋팅페이지 이동", { duration: 1500 });
          }}
        >
          <SettingsBadge.Icon />
        </SettingsBadge.Button>
      </Flex>
    </motion.div>
  );
};
