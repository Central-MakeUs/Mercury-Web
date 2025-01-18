import { AspectRatio } from "@repo/design-system/AspectRatio";
import { FloatingActionButton } from "@repo/design-system/FloatingActionButton";
import { Image } from "@repo/design-system/Image";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { SearchBar } from "@repo/design-system/SearchBar";
import { Text, textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { MagnifyIcon } from "@repo/icon/MagnifyIcon";
import { Box } from "@repo/ui/Box";
import { CenterStack } from "@repo/ui/CenterStack";
import { Flex } from "@repo/ui/Flex";
import { JustifyBetween } from "@repo/ui/JustifyBetween";
import { List } from "@repo/ui/List";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { ToggleButton } from "@repo/ui/ToggleButton";
import { ToggleButtonGroup } from "@repo/ui/ToggleButtonGroup";
import { type ComponentProps, useState } from "react";

export default function BookRecordPage() {
  const [sortOption, setSortOption] = useState<string>(SORT_OPTIONS.CREATED_AT.value);

  return (
    <Stack className=" w-full justify-between">
      <Stack>
        <Spacing className=" h-[24px]" />
        <JustifyBetween className=" items-end w-full px-[16px]">
          <Text variant={"title/24_sb"} className=" text-gray-800">
            독서기록
          </Text>
          <Flex className=" gap-x-[18px]">
            <ToggleButtonGroup
              value={sortOption}
              onChange={(value) => value && setSortOption(value)}
            >
              <BookRecordToggleButton value={SORT_OPTIONS.CREATED_AT.value}>
                {SORT_OPTIONS.CREATED_AT.label}
              </BookRecordToggleButton>
              <BookRecordToggleButton value={SORT_OPTIONS.UPDATED_AT.value}>
                {SORT_OPTIONS.UPDATED_AT.label}
              </BookRecordToggleButton>
            </ToggleButtonGroup>
          </Flex>
        </JustifyBetween>
        <Spacing className=" h-[26px]" />

        <Flex className=" px-[16px]">
          <SearchBar left={<MagnifyIcon />} placeholder="독서기록 검색하기" />
        </Flex>
      </Stack>

      <Stack className=" w-full h-full">
        <List
          fallback={
            <CenterStack className="h-full px-[72px]">
              <AspectRatio ratio={283 / 210}>
                <Image
                  src={BOOK_RECORD_ASSETS.EMPTY_FALLBACK}
                  alt="list empty fallback image"
                  objectfit={"fill"}
                />
              </AspectRatio>
              <Spacing className=" h-[128px]" />
              <Text
                variant={"body/18_m"}
                className=" text-gray-1000 text-center whitespace-pre-wrap"
              >{`나의 독서 습관을 만들어줄\n첫 번째 독서기록을 시작해보세요`}</Text>
            </CenterStack>
          }
        ></List>

        {/* need bottomnavigation height migration */}
        <Box className=" h-[78px]" />
        <Box className=" fixed bottom-0 left-[50%] translate-x-[-50%]">
          <MaxWidthBox className="flex justify-end mb-[94px] mr-[18px]">
            <FloatingActionButton />
          </MaxWidthBox>
        </Box>
      </Stack>
    </Stack>
  );
}

const BOOK_RECORD_ASSETS = {
  EMPTY_FALLBACK: "/images/bookrecord/bookrecord_tab_empty_fallback.webp",
};

const SORT_OPTIONS = {
  CREATED_AT: {
    label: "생성일 순",
    value: "CREATED_AT",
  },
  UPDATED_AT: {
    label: "업데이트 순",
    value: "UPDATED_AT",
  },
} as const;

const BookRecordToggleButton = (props: ComponentProps<typeof ToggleButton>) => {
  const { children, className, ...rest } = props;
  return (
    <ToggleButton
      className={cn(
        textVariants({ variant: "body/16_sb" }),
        " data-[state=selected]:text-gray-500 text-gray-300",
        className,
      )}
      {...rest}
    >
      {children}
    </ToggleButton>
  );
};
