import { Image } from "@repo/design-system/Image";
import { Text, textVariants } from "@repo/design-system/Text";
import { Flex } from "@repo/ui/Flex";
import { Stack } from "@repo/ui/Stack";

import { Pressable } from "@repo/design-system/Pressable";
import { cn } from "@repo/design-system/cn";
import { type PropsWithChildren, type ReactNode, useEffect, useRef, useState } from "react";

export const BookRecordDetailMemoItem = (
  props: PropsWithChildren<{
    onPressComplete?: () => void;
    header?: ReactNode;
  }>,
) => {
  const { header, children, onPressComplete = () => {} } = props;
  const memoRef = useRef<HTMLDivElement>(null);
  const [boxMarginTop, setBoxMarginTop] = useState("top-[13px]");
  useEffect(() => {
    if (memoRef.current) {
      const memoHeight = memoRef.current.clientHeight;
      setBoxMarginTop(memoHeight < 44 ? "top-[2px]" : "top-[13px]");
    }
  }, []);

  return (
    <Stack className="">
      <Flex className={cn(" text-gray-600 mb-2 ", textVariants({ variant: "body/13_r" }))}>
        {header}
      </Flex>
      <Pressable onPressComplete={onPressComplete} delay={600}>
        <Stack className=" touch-none select-none w-full pl-4  transition-all data-[pressed=true]:duration-[400ms] data-[pressed=true]:scale-[0.98] data-[pressed=true]:opacity-70 data-[pressed=false]:duration-[400ms]">
          <Stack
            ref={memoRef}
            className=" p-[10px] min-h-[43px] relative bg-yellow-green w-full rounded-[12px]"
          >
            <Text className=" w-full text-gray-600" variant={"body/15_r"}>
              {children}
            </Text>
            <Image
              className={cn(" absolute left-[-8px] z-[-1]", boxMarginTop)}
              src="/images/common/polygon_yellow_green.webp"
              alt="polygon"
            />
          </Stack>
        </Stack>
      </Pressable>
    </Stack>
  );
};
