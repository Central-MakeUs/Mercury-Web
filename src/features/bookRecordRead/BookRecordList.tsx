import { List } from "@repo/ui/List";
import { useSuspenseQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { getRecordsQueryOptions } from "~/entities/record/api/getRecords";
import type { BookRecord } from "~/entities/record/model/record.model";
import { FirstUserRecordFallback } from "~/features/bookRecordRead/components/FirstUserRecordFallback";
import { RecordedBookItem } from "~/features/bookRecordRead/components/RecordedBookItem";
import { SearchResultEmptyFallback } from "~/features/bookRecordRead/components/SearchResultEmptyFallback";
import { searchBookRecords } from "./lib/searchBookRecords";
import { sortBookRecords } from "./lib/sortBookRecords";
import { useBookRecordStore } from "./model/BookRecordProvider";

export const BookRecordList = () => {
  const search = useBookRecordStore((store) => store.search);
  const sortOption = useBookRecordStore((store) => store.sortOption);

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
    <List className=" gap-y-[24px]" fallback={fallback}>
      {records.map((record) => (
        <RecordedBookItem {...createRecordedBookItemProps(record)} key={record.recordId} />
      ))}
    </List>
  );
};

const createRecordedBookItemProps = (record: BookRecord) => {
  return {
    gauge: record.updatedGauge,
    imageUrl: record.book.coverImageUrl,
    title: record.book.title,
    updatedAt: format(new Date(record.updatedAt ?? ""), "yyyy.MM.dd"),
    bookSummary: record.latestMemoContent,
  };
};
