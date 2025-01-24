import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { NotificationBadge } from "@repo/design-system/NotificationBadge";
import { Text } from "@repo/design-system/Text";
import { MercuryIcon } from "@repo/icon/MercuryIcon";
import { CenterStack } from "@repo/ui/CenterStack";
import { Flex } from "@repo/ui/Flex";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { isAfter, isSameDay } from "date-fns";
import { motion } from "motion/react";
import { useMemo } from "react";
import { ExpProgressBar } from "~/entities/user/components/ExpProgressBar";
import { HabitCalendar } from "~/entities/user/components/HabitCalendar";

export default function HomePage() {
  return (
    <Stack className="  w-full">
      <Header />
      <MainSection />
      <Spacing className=" h-[16px]" />
      <ExpSection />
      <Spacing className=" h-[12px]" />
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

      <NotificationBadge.Button>
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

const ExpSection = () => {
  return (
    <Stack className=" w-full px-[20px]">
      <Flex className=" gap-x-[16px]">
        <Text variant={"body/18_sb"} className=" text-nowrap text-[#393F46]">
          레벨 9
        </Text>
        <ExpProgressBar value={50} totalExp={200} currentExp={50} />
      </Flex>
    </Stack>
  );
};

const HabitBar = (props: { userName: string; successCount: number }) => {
  const { userName, successCount } = props;
  const normalText = `${userName}님은 현재`;
  const boldText = successCount > 0 ? `${successCount}일 연속 습관 쌓는 중!` : "습관 쌓을 준비 중";
  return (
    <Flex className=" w-full py-[8px] rounded-[4px] bg-gradient-to-r from-main3-gradient-from to-main3-gradient-to flex justify-center items-center">
      <Flex className=" w-[17px] h-[17px]">
        <AspectRatio ratio={1}>
          <MercuryIcon />
        </AspectRatio>
      </Flex>

      <Text variant={"body/15_m"} className=" ml-[10px] mr-[4px] text-white">
        {normalText}
      </Text>
      <Text variant={"body/15_sb"} className=" text-white">
        {boldText}
      </Text>
    </Flex>
  );
};

const HOME_ASSETS = {
  HOME_LOGO: "/images/home/home_logo.webp",
  HOME_MERCURY: "/images/home/home_mercury.webp",
};

const HabitSection = () => {
  const weekDates = useMemo(() => getWeekDates(new Date()), []);

  return (
    <Stack className=" px-[20px]">
      <Text variant={"body/18_sb"} className=" mb-[10px] text-[#393F46]">
        습관 쌓기
      </Text>
      <Flex className=" gap-x-[8px] justify-between">
        {weekDates.map((date) => (
          <HabitCalendar.Cell
            key={date.toISOString()}
            header={<HabitCalendar.Header>{getDayName(date)}</HabitCalendar.Header>}
            status={getStatus({ targetDate: date, today: new Date(), isDone: true })}
          >
            {date.getDate()}
          </HabitCalendar.Cell>
        ))}
      </Flex>
      <Spacing className=" h-[12px]" />
      <HabitBar userName="나카홍" successCount={5} />
    </Stack>
  );
};

const getStatus = (context: { targetDate: Date; today: Date; isDone?: boolean }) => {
  const { targetDate, today, isDone } = context;
  if (isSameDay(targetDate, today) && !isDone) {
    return "pending" as const;
  }

  if (isAfter(targetDate, today)) {
    return "pending" as const;
  }

  if (isDone) {
    return "success" as const;
  }

  return "fail" as const;
};

const getWeekDates = (date: Date) => {
  const currentDate = new Date(date);
  const currentDay = currentDate.getDay();
  const diffToMonday = currentDay === 0 ? -6 : 1 - currentDay;

  const monday = new Date(currentDate);
  monday.setDate(currentDate.getDate() + diffToMonday);

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);
    return date;
  });

  return weekDates;
};

const getDayName = (date: Date) => {
  const dayEnum = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토",
  };
  return dayEnum[date.getDay() as keyof typeof dayEnum];
};
