import { FloatingActionButton } from "@repo/design-system/FloatingActionButton";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { SearchBar } from "@repo/design-system/SearchBar";
import { Text } from "@repo/design-system/Text";
import { MagnifyIcon } from "@repo/icon/MagnifyIcon";
import { Box } from "@repo/ui/Box";
import { Flex } from "@repo/ui/Flex";
import { JustifyBetween } from "@repo/ui/JustifyBetween";
import { List } from "@repo/ui/List";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { ToggleButtonGroup } from "@repo/ui/ToggleButtonGroup";
import { useSuspenseQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useState } from "react";
import { Link } from "react-router";
import { getRecordsQueryOptions } from "~/entities/record/api/getRecords";
import type { BookRecord } from "~/entities/record/model/record.model";
import { BookRecordToggleButton } from "~/features/bookRecordRead/components/BookRecordToggleButton";
import { FirstUserRecordFallback } from "~/features/bookRecordRead/components/FirstUserRecordFallback";
import { RecordedBookItem } from "~/features/bookRecordRead/components/RecordedBookItem";
import { SearchResultEmptyFallback } from "~/features/bookRecordRead/components/SearchResultEmptyFallback";
import {
  type BookRecordSortOption,
  isBookRecordSortOption,
} from "~/features/bookRecordRead/ model/bookRecord.model";
import { BOOK_RECORD_SORT_OPTIONS } from "~/features/bookRecordRead/ model/bookRecord.model";
import { hangulIncludes } from "~/shared/utils/hangulIncludes";

const searchBookRecords = <T extends Pick<BookRecord, "book">>(records: T[], search: string) => {
  return records.filter((record) => {
    return hangulIncludes(record.book.title, search);
  });
};

const sortBookRecords = <T extends BookRecord>(records: T[], sortOption: BookRecordSortOption) => {
  return records.slice().sort((a, b) => {
    if (sortOption === BOOK_RECORD_SORT_OPTIONS.CREATED_AT.value) {
      return a.createdAt.localeCompare(b.createdAt);
    }
    if (sortOption === BOOK_RECORD_SORT_OPTIONS.UPDATED_AT.value) {
      if (a.updatedAt && b.updatedAt) {
        return a.updatedAt.localeCompare(b.updatedAt);
      }
      return 0;
    }
    return 0;
  });
};

export default function BookRecordPage() {
  const [sortOption, setSortOption] = useState<BookRecordSortOption>(
    BOOK_RECORD_SORT_OPTIONS.CREATED_AT.value,
  );
  const [search, setSearch] = useState("");

  const recordsResponse = useSuspenseQuery(getRecordsQueryOptions());
  const searchedRecords = searchBookRecords(recordsResponse.data.records, search);
  const sortedRecords = sortBookRecords(searchedRecords, sortOption);
  const records = sortedRecords;
  const isSearchResultEmpty = search.length > 0 && searchedRecords.length === 0;
  const fallback = isSearchResultEmpty ? (
    <SearchResultEmptyFallback />
  ) : (
    <FirstUserRecordFallback />
  );
  return (
    <Stack className=" w-full min-h-screen justify-between">
      <Stack>
        <Spacing className=" h-[24px]" />
        <JustifyBetween className=" items-end w-full px-[16px]">
          <Text variant={"title/24_sb"} className=" text-gray-800">
            독서기록
          </Text>
          <Flex className=" gap-x-[18px]">
            <ToggleButtonGroup
              value={sortOption}
              onChange={(value) => isBookRecordSortOption(value) && setSortOption(value)}
            >
              <BookRecordToggleButton value={BOOK_RECORD_SORT_OPTIONS.CREATED_AT.value}>
                {BOOK_RECORD_SORT_OPTIONS.CREATED_AT.label}
              </BookRecordToggleButton>
              <BookRecordToggleButton value={BOOK_RECORD_SORT_OPTIONS.UPDATED_AT.value}>
                {BOOK_RECORD_SORT_OPTIONS.UPDATED_AT.label}
              </BookRecordToggleButton>
            </ToggleButtonGroup>
          </Flex>
        </JustifyBetween>
        <Spacing className=" h-[26px]" />

        <Flex className=" px-[16px]">
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            left={<MagnifyIcon />}
            placeholder="독서기록 검색하기"
          />
        </Flex>
      </Stack>

      <Stack className=" w-full h-full">
        <List className=" px-[16px] py-[14px] gap-y-[24px]" fallback={fallback}>
          {records.map((record) => (
            <RecordedBookItem {...createRecordedBookItemProps(record)} key={record.recordId} />
          ))}
        </List>

        {/* need bottomnavigation height migration */}
        <Box className=" h-[78px]" />
        <Box className=" fixed bottom-0 left-[50%] translate-x-[-50%]">
          <MaxWidthBox className="flex justify-end mb-[94px] mr-[18px]">
            <Link to={"/book-record/write"}>
              <FloatingActionButton />
            </Link>
          </MaxWidthBox>
        </Box>
      </Stack>
    </Stack>
  );
}

const createRecordedBookItemProps = (record: BookRecord) => {
  return {
    gauge: record.updatedGauge,
    imageUrl: record.book.coverImageUrl,
    title: record.book.title,
    updatedAt: format(new Date(record.updatedAt ?? ""), "yyyy.MM.dd"),
    bookSummary: record.latestMemoContent,
  };
};
