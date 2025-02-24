import { SafeArea } from "@repo/bridge-web/SafeArea";
import { AspectRatio } from "@repo/design-system/AspectRatio";
import { NotificationBadge } from "@repo/design-system/NotificationBadge";
import { SettingsBadge } from "@repo/design-system/SettingsBadge";
import { Text } from "@repo/design-system/Text";
import { toast } from "@repo/design-system/Toast";
import { Flex } from "@repo/ui/Flex";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { useSuspenseQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useGetUserActivityQueryOptions } from "~/entities/user/api/getUserActivity";
import { HabitSection } from "~/features/userExp/HabitSection";
import { MainSection } from "~/features/userInfo/UserInfoSection";

export default function HomePage() {
  //const { data: user } = useSuspenseQuery(useGetUserQueryOptions());
  const { data: activities } = useSuspenseQuery(useGetUserActivityQueryOptions());
  return (
    <SafeArea edges={["top", "left", "bottom", "right"]} className=" w-full">
      <Stack className="  w-full">
        <Header />
        <MainSection
          nickname={activities.nickname}
          exp={activities.exp}
          joinDays={activities.joinDays}
        />
        <HabitSection
          nickname={activities.nickname}
          streakDays={activities.streakDays}
          weeklyStreak={activities.weeklyStreak}
        />
        <Spacing className=" h-[160px]" />
      </Stack>
    </SafeArea>
  );
}

const Header = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className=" pt-[24px] flex justify-between pb-[30px] bg-white w-full px-[16px] overflow-hidden"
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
            navigate("/settings");
          }}
        >
          <SettingsBadge.Icon />
        </SettingsBadge.Button>
      </Flex>
    </motion.div>
  );
};
