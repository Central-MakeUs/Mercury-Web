import { List } from "@repo/ui/List";
import { Stack } from "@repo/ui/Stack";
import { Delay, wrap } from "@suspensive/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useNavigate } from "react-router";
import { getRecordsQueryOptions } from "~/entities/record/api/getRecords";
import type { BookRecord } from "~/entities/record/model/record.model";
import { FirstUserRecordFallback } from "~/features/bookRecordRead/components/FirstUserRecordFallback";
import { RecordedBookItem } from "~/features/bookRecordRead/components/RecordedBookItem";
import { SearchResultEmptyFallback } from "~/features/bookRecordRead/components/SearchResultEmptyFallback";
import { searchBookRecords } from "./lib/searchBookRecords";
import { useBookRecordStore } from "./model/BookRecordProvider";

export const BookRecordList = wrap
  .ErrorBoundary({ fallback: <FirstUserRecordFallback /> })
  .Suspense({
    fallback: (
      <Delay ms={500}>
        <FirstUserRecordFallback />
      </Delay>
    ),
  })
  .on(() => {
    const search = useBookRecordStore((store) => store.search);
    const sortType = useBookRecordStore((store) => store.sortType);
    const recordsResponse = useSuspenseQuery(getRecordsQueryOptions({ sortType }));
    const navigate = useNavigate();
    const searchedRecords = searchBookRecords(recordsResponse.data.records, search);
    const records = searchedRecords;
    const isSearchResultEmpty = search.length > 0 && searchedRecords.length === 0;

    const handleClick = (recordId: string) => {
      navigate(`/book-record/${recordId}`);
    };

    if (isSearchResultEmpty) {
      return (
        <Stack className=" h-full">
          <SearchResultEmptyFallback />
        </Stack>
      );
    }

    if (records.length === 0) {
      return (
        <Stack className=" h-full">
          <FirstUserRecordFallback />
        </Stack>
      );
    }

    return (
      <Stack className=" pt-[160px] px-[16px]">
        <List className=" gap-y-[24px]">
          {records.map((record) => (
            <RecordedBookItem
              {...createRecordedBookItemProps(record)}
              onClick={() => handleClick(record.recordId)}
              key={record.recordId}
            />
          ))}
        </List>
      </Stack>
    );
  });

const createRecordedBookItemProps = (record: BookRecord) => {
  const gauge = record.updatedGauge;
  const title = record.book.title;
  const imageUrl = record.book.coverImageUrl;
  const bookSummary = record.latestMemoContent;
  try {
    const updatedAt = format(new Date(record.updatedAt ?? ""), "yyyy.MM.dd");
    return { gauge, title, imageUrl, bookSummary, updatedAt };
  } catch (_e) {
    const updatedAt = "업데이트 내역이 없어요";
    return { gauge, title, imageUrl, bookSummary, updatedAt };
  }
};
