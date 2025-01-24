import { Image } from "@repo/design-system/Image";
import { Text, textVariants } from "@repo/design-system/Text";
import { Flex } from "@repo/ui/Flex";
import { Stack } from "@repo/ui/Stack";

import { Pressable } from "@repo/design-system/Pressable";
import { cn } from "@repo/design-system/cn";
import type { PropsWithChildren, ReactNode } from "react";

export const BookRecordDetailMemoItem = (
  props: PropsWithChildren<{
    onPressComplete?: () => void;
    header?: ReactNode;
  }>,
) => {
  const { header, children, onPressComplete = () => {} } = props;
  return (
    <Stack className="">
      <Flex className={cn(" text-gray-600 mb-2 ", textVariants({ variant: "body/13_r" }))}>
        {header}
      </Flex>
      <Pressable onPressComplete={onPressComplete} delay={600}>
        <Stack className=" touch-none select-none w-full pl-4  transition-all data-[pressed=true]:duration-[400ms] data-[pressed=true]:scale-[0.98] data-[pressed=true]:opacity-70 data-[pressed=false]:duration-[400ms]">
          <Stack className=" p-[10px] min-h-[66px] relative bg-yellow-green w-full rounded-[12px]">
            <Text className=" w-full text-gray-600" variant={"body/15_r"}>
              {children}
            </Text>
            <Image
              className=" absolute top-[13px] left-[-8px] z-[-1]"
              src="/images/common/polygon_yellow_green.webp"
              alt="polygon"
            />
          </Stack>
        </Stack>
      </Pressable>
    </Stack>
  );
};
