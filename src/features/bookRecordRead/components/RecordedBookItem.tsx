import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { MiniSingleSlider } from "@repo/design-system/MiniSingleSlider";
import { Text } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { Box } from "@repo/ui/Box";
import { Flex } from "@repo/ui/Flex";
import { JustifyBetween } from "@repo/ui/JustifyBetween";
import { Stack } from "@repo/ui/Stack";
import { type Ref, forwardRef } from "react";

interface RecordedBookItemProps {
  imageUrl: string;
  title: string;
  className?: string;
  onClick?: () => void;
  updatedAt: string;
  bookSummary: string;
  gauge: number;
}

export const RecordedBookItem = forwardRef(function RecordedBookItem(
  { gauge, imageUrl, title, className, onClick, updatedAt, bookSummary }: RecordedBookItemProps,
  ref?: Ref<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={cn("flex w-full min-w-full gap-[13px] max-h-[156px] h-[156px]", className)}
    >
      <Box className=" min-w-[104px] w-fit max-w-[104px]">
        <AspectRatio className="w-fit" ratio={104 / 156}>
          <Image
            className="rounded-[4px] border-[1px] w-[104px] border-white/10"
            objectfit={"contain"}
            src={imageUrl}
            alt={`${title} 표지`}
          />
        </AspectRatio>
      </Box>

      <Stack className=" flex-grow w-full text-left">
        <Text variant={"body/16_sb"} className="mb-[10px] line-clamp-2">
          {title}
        </Text>

        <Stack className=" w-full ">
          <JustifyBetween className=" w-full  ">
            <Flex className="gap-[5px] w-full">
              <Text variant={"body/15_m"} className="text-gray-500">
                업데이트
              </Text>
              <Text variant={"body/15_m"} className="text-gray-800">
                {updatedAt}
              </Text>
            </Flex>
            <Flex className=" items-center gap-x-[5px]">
              <MiniSingleSlider value={gauge} />
              <Text variant={"body/15_sb"} className=" text-pastel-violet">
                {gauge}%
              </Text>
            </Flex>
          </JustifyBetween>

          <Text variant={"body/13_r"} className="line-clamp-3 text-gray-400 mt-[21px]">
            {bookSummary}
          </Text>
        </Stack>
      </Stack>
    </button>
  );
});
