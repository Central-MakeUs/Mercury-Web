import type { BookRecord } from "~/entities/record/model/record.model";
import type { BookRecordSortOption } from "~/features/bookRecordRead/ model/bookRecord.model";
import { BOOK_RECORD_SORT_OPTIONS } from "~/features/bookRecordRead/ model/bookRecord.model";

export const sortBookRecords = <T extends BookRecord>(
  records: T[],
  sortOption: BookRecordSortOption,
) => {
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
