import { Text } from "@repo/design-system/Text";
import { Box } from "@repo/ui/Box";
import { Flex } from "@repo/ui/Flex";
import { JustifyBetween } from "@repo/ui/JustifyBetween";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import type { ComponentProps } from "react";
import { BookRecordList } from "~/features/bookRecordRead/BookRecordList";
import { BookRecordSearchBar } from "~/features/bookRecordRead/BookRecordSearchBar";
import { BookRecordSortToggleGroup } from "~/features/bookRecordRead/BookRecordSortToggleGroup";
import { GoBookRecordWriteButton } from "~/features/bookRecordRead/GoBookRecordWriteButton";
import { BookRecordProvider } from "~/features/bookRecordRead/model/BookRecordProvider";

export default function BookRecordPage(
  props: Omit<ComponentProps<typeof BookRecordProvider>, "children">,
) {
  return (
    <BookRecordProvider {...props}>
      <Stack className=" w-full min-h-screen justify-between">
        <Stack>
          <Spacing className=" h-[24px]" />
          <JustifyBetween className=" items-end w-full px-[16px]">
            <Text variant={"title/24_sb"} className=" text-gray-800">
              독서기록
            </Text>
            <BookRecordSortToggleGroup />
          </JustifyBetween>
          <Spacing className=" h-[26px]" />

          <Flex className=" px-[16px]">
            <BookRecordSearchBar />
          </Flex>
        </Stack>

        <Stack className=" w-full h-full px-[16px] py-[14px] ">
          <BookRecordList />
          {/* need bottomnavigation height migration */}
          <Box className=" h-[78px]" />
        </Stack>

        <GoBookRecordWriteButton />
      </Stack>
    </BookRecordProvider>
  );
}
