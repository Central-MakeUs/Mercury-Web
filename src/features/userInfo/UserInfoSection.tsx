import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Caption } from "@repo/design-system/Caption";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { Flex } from "@repo/ui/Flex";
import { Stack } from "@repo/ui/Stack";
import { wrap } from "@suspensive/react";
import { motion } from "motion/react";
import { ExpProgressBar } from "~/entities/user/components/ExpProgressBar";
import {
  type User,
  calculateUserLevel,
  getExpPercentage,
  getGoalExp,
} from "~/entities/user/model/user.model";
import { HOME_ASSETS } from "~/shared/images/home/homeImages";

const ExpSection = (props: { exp: number; goalExp: number; percentage: number; level: string }) => {
  const { exp, goalExp, percentage, level } = props;
  const formatExp = percentage.toFixed(2);
  return (
    <Stack className=" w-full px-[20px]">
      <Flex className=" gap-x-[6px] items-center">
        <Text variant={"body/18_sb"} className=" text-nowrap text-gray-100">
          {level}
        </Text>

        <ExpProgressBar value={percentage} totalExp={goalExp} currentExp={exp} />
        <Text variant={"body/14_sb"} className="text-white-violet ml-[1px]">
          {formatExp}%
        </Text>
      </Flex>
    </Stack>
  );
};

const Fallback = () => {
  return (
    <Stack className=" w-full bg-navy">
      <motion.div
        className=" w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <AspectRatio ratio={375 / 343} className=" flex justify-center items-center">
          <Stack>
            <Stack>
              <Text>머큐리와 함께한 지 000일</Text>
              <Text></Text>
            </Stack>
            <Image src={HOME_ASSETS.HOME_MERCURY_WEBP} alt="mercury character" objectfit={"fill"} />
            <ExpSection exp={0} goalExp={0} percentage={0} level={`레벨 1`} />
          </Stack>
        </AspectRatio>
      </motion.div>
    </Stack>
  );
};

export const MainSection = wrap
  .Suspense({
    fallback: <Fallback />,
  })
  .on((props: Pick<User, "nickname" | "exp" | "joinDays">) => {
    const { nickname, exp, joinDays } = props;

    const level = calculateUserLevel(exp);
    const goalExp = getGoalExp(level);
    const percentage = getExpPercentage(exp, goalExp);

    return (
      <Stack className=" w-full bg-navy justify-between py-[16px]">
        <motion.div
          className=" w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Stack className="gap-[25px]">
            <Stack className="px-5 gap-[6px]">
              <Caption>
                <Text className="text-white" variant={"caption/12_m"}>
                  머큐리와 함께한 지 {joinDays}일
                </Text>
              </Caption>
              <Text variant={"title/25_b"} className="text-gray-100">
                {nickname}
              </Text>
            </Stack>

            <Image
              src={HOME_ASSETS.HOME_MERCURY_WEBP}
              alt="mercury character"
              objectfit={"fill"}
              className={cn("px-[36px] short:px-[50px]")}
            />

            <ExpSection
              exp={exp}
              goalExp={goalExp}
              percentage={percentage}
              level={`레벨 ${level}`}
            />
          </Stack>
        </motion.div>
      </Stack>
    );
  });
