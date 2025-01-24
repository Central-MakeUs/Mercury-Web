import { List } from "@repo/ui/List";
import { Delay, wrap } from "@suspensive/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { useNavigate } from "react-router";
import { getRecordsQueryOptions } from "~/entities/record/api/getRecords";
import type { BookRecord } from "~/entities/record/model/record.model";
import { useTestUserQueryOptions } from "~/entities/user/api/getTestUser";
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
    const { data: user } = useSuspenseQuery(useTestUserQueryOptions());
    const userId = user.userId;
    const search = useBookRecordStore((store) => store.search);
    const sortType = useBookRecordStore((store) => store.sortType);
    const recordsResponse = useSuspenseQuery(getRecordsQueryOptions({ userId, sortType }));
    const navigate = useNavigate();

    const searchedRecords = searchBookRecords(recordsResponse.data.records, search);
    // const sortedRecords = sortBookRecords(searchedRecords, sortType);
    const records = searchedRecords;
    const isSearchResultEmpty = search.length > 0 && searchedRecords.length === 0;

    const fallback = isSearchResultEmpty ? (
      <SearchResultEmptyFallback />
    ) : (
      <FirstUserRecordFallback />
    );
    return (
      <List className=" gap-y-[24px]" fallback={fallback}>
        {records.map((record) => (
          <RecordedBookItem
            {...createRecordedBookItemProps(record)}
            key={record.recordId}
            onClick={() => navigate(`/book-memo/${record.recordId}`)}
          />
        ))}
      </List>
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
