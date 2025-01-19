import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
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
      <Image
        className="rounded-[4px] max-w-[104px] border-[1px] border-white/10"
        objectfit={"contain"}
        src={imageUrl}
        alt={`${title} 표지`}
      />
      <div>
        <Text variant={"body/16_sb"} className="mb-[10px] line-clamp-2 text-left">
          {title}
        </Text>

        <Stack className="gap-[4px] ">
          <Flex className="gap-[5px]">
            <Text variant={"body/15_m"} className="text-gray-500">
              저자
            </Text>
            <Text variant={"body/15_m"} className="text-gray-800">
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
