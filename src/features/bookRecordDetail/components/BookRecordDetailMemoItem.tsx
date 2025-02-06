import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { Flex } from "@repo/ui/Flex";
import { Stack } from "@repo/ui/Stack";

import { MiniSingleSlider } from "@repo/design-system/MiniSingleSlider";
import { Pressable } from "@repo/design-system/Pressable";
import { cn } from "@repo/design-system/cn";
import { type PropsWithChildren, type ReactNode, useEffect, useRef, useState } from "react";

export const BookRecordDetailMemoItem = (
  props: PropsWithChildren<{
    onPressComplete?: () => void;
    header?: ReactNode;
    gauge: number;
  }>,
) => {
  const { header, children, gauge, onPressComplete = () => {} } = props;
  const memoRef = useRef<HTMLDivElement>(null);
  const [boxMarginTop, setBoxMarginTop] = useState("top-[13px]");
  useEffect(() => {
    if (memoRef.current) {
      const memoHeight = memoRef.current.clientHeight;
      setBoxMarginTop(memoHeight < 44 ? "top-[2px]" : "top-[13px]");
    }
  }, []);

  return (
    <Pressable onPressComplete={onPressComplete} delay={400}>
      <Stack className=" px-[16px] py-[16px] data-[pressed=true]:bg-gray-200 rounded-[14px] touch-none select-none transition-all data-[pressed=true]:duration-[400ms] data-[pressed=true]:scale-[0.98] data-[pressed=true]:opacity-70 data-[pressed=false]:duration-[400ms]">
        <Flex className="mb-2 items-center">
          <MiniSingleSlider value={gauge} />
          <Text variant={"body/15_sb"} className="text-pastel-violet ml-[5px] mr-[9px]">
            {gauge}%
          </Text>
          <Text variant={"body/13_r"} className="text-gray-600">
            {header}
          </Text>
        </Flex>
        <Stack className=" group  w-full pl-4 ">
          <Stack
            ref={memoRef}
            className=" p-[10px] min-h-[43px] relative bg-yellow-green w-full rounded-[12px]"
          >
            <Text className=" w-full text-gray-600 z-[1]" variant={"body/15_r"}>
              {children}
            </Text>
            <Image
              className={cn(" absolute left-[-8px]", boxMarginTop)}
              src="/images/common/polygon_yellow_green.webp"
              alt="polygon"
            />
          </Stack>
        </Stack>
      </Stack>
    </Pressable>
  );
};
