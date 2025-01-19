import { Image } from "@repo/design-system/Image";
import { Text } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
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
}

export const RecordedBookItem = forwardRef(function RecordedBookItem(
  { imageUrl, title, className, onClick, updatedAt, bookSummary }: RecordedBookItemProps,
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
        <Text variant={"body/16_sb"} className="mb-[10px] line-clamp-2">
          {title}
        </Text>

        <Stack>
          <JustifyBetween>
            <Flex className="gap-[5px]">
              <Text variant={"body/15_m"} className="text-gray-500">
                업데이트
              </Text>
              <Text variant={"body/15_m"} className="text-gray-800">
                {updatedAt}
              </Text>
            </Flex>
          </JustifyBetween>

          <Text variant={"body/13_r"} className="line-clamp-3 text-gray-400 mt-[21px]">
            {bookSummary}
          </Text>
        </Stack>
      </div>
    </button>
  );
});
