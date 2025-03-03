import { AspectRatio } from "@repo/design-system/AspectRatio";
import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { Box } from "@repo/ui/Box";
import { Flex } from "@repo/ui/Flex";
import { Stack } from "@repo/ui/Stack";
import { type Ref, forwardRef } from "react";

interface SearchBookItemProps {
  imageUrl: string;
  title: string;
  className?: string;
  onClick?: () => void;
  authorName: string;
  publishName: string;
}

export const SearchBookItem = forwardRef(function SearchBookItem(
  { imageUrl, title, className, onClick, authorName, publishName }: SearchBookItemProps,
  ref?: Ref<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className={cn("flex gap-[13px] max-h-[156px] text-left", className)}
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
      <div>
        <Text variant={"body/16_sb"} className="mb-[10px] line-clamp-2 text-left">
          {title}
        </Text>

        <Stack className="gap-[4px] ">
          <Flex className="gap-[5px]">
            <Text variant={"body/15_m"} className="text-gray-500 shrink-0">
              저자
            </Text>
            <Text variant={"body/15_m"} className="text-gray-800 line-clamp-1">
              {authorName}
            </Text>
          </Flex>

          <Flex className="gap-[5px]">
            <Text variant={"body/15_m"} className="text-gray-500">
              출판사
            </Text>
            <Text variant={"body/15_m"} className="text-gray-800">
              {publishName}
            </Text>
          </Flex>
        </Stack>
      </div>
    </button>
  );
});
