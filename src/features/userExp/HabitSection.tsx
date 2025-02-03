import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Text } from "@repo/design-system/Text";
import { MercuryIcon } from "@repo/icon/MercuryIcon";
import { Flex } from "@repo/ui/Flex";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { wrap } from "@suspensive/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { isAfter, isSameDay } from "date-fns";
import { useMemo } from "react";
import { useTestUserQueryOptions } from "~/entities/user/api/getTestUser";
import { HabitCalendar } from "~/entities/user/components/HabitCalendar";

const HabitBar = (props: { normalText: string; boldText: string }) => {
  const { normalText, boldText } = props;
  return (
    <Flex className=" line-clamp-1 w-full h-[40px] py-[8px] rounded-[4px] bg-gradient-to-r from-main3-gradient-from to-main3-gradient-to flex justify-center items-center">
      <Flex className=" w-[17px] h-[17px] ">
        <AspectRatio ratio={1}>
          <MercuryIcon />
        </AspectRatio>
      </Flex>
      <Text as="p" className=" w-[80%] line-clamp-1 text-white">
        <Text as="span" variant={"body/15_m"} className=" ml-[10px] mr-[4px]">
          {normalText}
        </Text>
        <Text as="span" variant={"body/15_sb"}>
          {boldText}
        </Text>
      </Text>
    </Flex>
  );
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

const Fallback = () => {
  return (
    <>
      <Spacing className=" h-[12px]" />
      <Stack className=" px-[20px] w-full animate-pulse">
        <Text variant={"body/18_sb"} className=" mb-[10px] text-[#393F46]">
          습관 쌓기
        </Text>
        <Flex className=" gap-x-[8px] justify-between">
          {getWeekDates(new Date()).map((date) => (
            <HabitCalendar.Cell
              key={date.toISOString()}
              header={<HabitCalendar.Header>{getDayName(date)}</HabitCalendar.Header>}
              status={"pending"}
            >
              {date.getDate()}
            </HabitCalendar.Cell>
          ))}
        </Flex>

        <Spacing className=" h-[12px]" />
        <Flex className=" w-full h-[40px] py-[8px] rounded-[4px] bg-gradient-to-r from-main3-gradient-from to-main3-gradient-to flex justify-center items-center"></Flex>
      </Stack>
    </>
  );
};

export const HabitSection = wrap
  .Suspense({
    fallback: <Fallback />,
  })
  .on(() => {
    const { data: user } = useSuspenseQuery(useTestUserQueryOptions());

    const nickname = `테스터${user.nickname.slice(10, 14)}`;
    const normalText = `${nickname}님은 현재`;
    const successCount = 5;
    const boldText =
      successCount > 0 ? `${successCount}일 연속 습관 쌓는 중!` : "습관 쌓을 준비 중";

    const weekDates = useMemo(() => getWeekDates(new Date()), []);

    return (
      <>
        <Spacing className=" h-[17px]" />
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
          <HabitBar normalText={normalText} boldText={boldText} />
        </Stack>
      </>
    );
  });
