import { SafeArea } from "@repo/bridge-web/SafeArea";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { Text } from "@repo/design-system/Text";
import { Flex } from "@repo/ui/Flex";
import { JustifyBetween } from "@repo/ui/JustifyBetween";
import { Spacing } from "@repo/ui/Spacing";
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
      <SafeArea edges={["top", "bottom", "left", "right"]} className="  w-full min-h-screen ">
        <MaxWidthBox className=" pt-[24px] fixed w-full bg-white z-10">
          <JustifyBetween className=" items-end w-full px-[16px]">
            <Text variant={"title/24_sb"} className=" text-gray-800">
              독서기록
            </Text>
            <BookRecordSortToggleGroup />
          </JustifyBetween>
          <Spacing className=" h-[26px]" />

          <Flex className=" px-[16px] z-2">
            <BookRecordSearchBar />
          </Flex>
        </MaxWidthBox>

        <BookRecordList />

        <GoBookRecordWriteButton />
        <Spacing className="h-[80px]" />
      </SafeArea>
    </BookRecordProvider>
  );
}
