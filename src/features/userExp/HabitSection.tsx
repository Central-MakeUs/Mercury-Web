import { AspectRatio } from "@repo/design-system/AspectRatio";
import { BottomSheet } from "@repo/design-system/BottomSheet";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { BookIcon } from "@repo/icon/BookIcon";
import { CheckIcon } from "@repo/icon/CheckIcon";
import { MercuryIcon } from "@repo/icon/MercuryIcon";
import { TimerIcon } from "@repo/icon/TimerIcon";
import { Flex } from "@repo/ui/Flex";
import { JustifyBetween } from "@repo/ui/JustifyBetween";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { wrap } from "@suspensive/react";
import { isAfter, isSameDay } from "date-fns";
import { useMemo } from "react";
import { HabitCalendar } from "~/entities/user/components/HabitCalendar";
import type { User } from "~/entities/user/model/user.model";
import { HABIT_ASSETS } from "~/shared/images/habit/habitImages";

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
  .on((props: Pick<User, "nickname" | "exp">) => {
    const { nickname, exp } = props;
    const normalText = `${nickname}님은 현재`;
    const successCount = 5;
    const boldText =
      successCount > 0 ? `${successCount}일 연속 습관 쌓는 중!` : "습관 쌓을 준비 중";

    const weekDates = useMemo(() => getWeekDates(new Date()), []);

    return (
      <BottomSheet.Root handleOnly={true}>
        <Spacing className=" h-[17px]" />
        <Stack className=" px-[20px]">
          <Text variant={"body/18_sb"} className=" mb-[10px] text-[#393F46]">
            습관 쌓기
          </Text>

          <Flex className=" gap-x-[8px] justify-between">
            {weekDates.map((date) => (
              <BottomSheet.Trigger asChild={true} key={date.toISOString()}>
                <HabitCalendar.Cell
                  key={date.toISOString()}
                  header={<HabitCalendar.Header>{getDayName(date)}</HabitCalendar.Header>}
                  status={getStatus({ targetDate: date, today: new Date(), isDone: true })}
                >
                  {date.getDate()}
                </HabitCalendar.Cell>
              </BottomSheet.Trigger>
            ))}
          </Flex>

          <Spacing className=" h-[12px]" />
          <HabitBar normalText={normalText} boldText={boldText} />
        </Stack>
        <TodayHabit />
      </BottomSheet.Root>
    );
  });

const TodayHabit = () => {
  return (
    <>
      <BottomSheet.Portal>
        <BottomSheet.Overlay />
        <BottomSheet.Content className=" flex  items-center flex-col pt-[16px] px-[20px] rounded-t-[20px] h-[360px] bg-gray-white">
          <BottomSheet.Handle className=" mb-[16px]" />
          <BottomSheet.Description className=" sr-only">
            오늘의 미션을 확인합니다.
          </BottomSheet.Description>
          <BottomSheet.Title asChild={true}>
            <JustifyBetween className="w-full">
              <Text variant={"title/25_sb"} className="text-gray-800 whitespace-pre-wrap">
                {"6일 연속 \n성공했어요!"}
              </Text>
              <Image
                src={HABIT_ASSETS.MERCURY_HABIT_LOGO_WEBP}
                alt="mercury character"
                objectfit={"fill"}
              />
            </JustifyBetween>
          </BottomSheet.Title>

          <Stack className="mt-[19px] mb-[20px] w-full">
            <Flex className="items-center">
              <Image
                src={HABIT_ASSETS.HABIT_BLOCK_WEBP}
                alt="habit block"
                objectfit={"fill"}
                className="w-5 h-5"
              />
              <Text className="ml-[7px] mr-[12px] text-gray-600" variant={"body/18_sb"}>
                습관쌓기
              </Text>
              <Text className="text-pastel-violet" variant={"body/18_m"}>
                + 50xp
              </Text>
            </Flex>

            <Stack className="rounded-[5px] bg-gray-100 px-7 py-[14px] mt-[9px] gap-[14px]">
              <JustifyBetween className="items-center">
                <Flex className="items-center">
                  <BookIcon />
                  <Text className="text-gray-500 ml-[13px] mr-[20px]" variant={"body/15_m"}>
                    독서기록 또는 메모 1개 작성하기
                  </Text>
                </Flex>
                <CheckIcon />
              </JustifyBetween>
              <JustifyBetween className="items-center">
                <Flex className="items-center">
                  <TimerIcon selected={true} />
                  <Text className="text-gray-500 ml-[13px] mr-[20px]" variant={"body/15_m"}>
                    10초 이상 타이머 완료하기
                  </Text>
                </Flex>
                <CheckIcon checked={true} />
              </JustifyBetween>
            </Stack>
          </Stack>
        </BottomSheet.Content>
      </BottomSheet.Portal>
    </>
  );
};
