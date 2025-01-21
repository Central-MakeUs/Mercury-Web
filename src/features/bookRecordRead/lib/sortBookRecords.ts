import { isBefore, toDate } from "date-fns";
import type { BookRecord } from "~/entities/record/model/record.model";
import type { BookRecordSortType } from "~/features/bookRecordRead/model/bookRecord.model";
import { BOOK_RECORD_SORT_TYPES } from "~/features/bookRecordRead/model/bookRecord.model";

export const sortBookRecords = <T extends BookRecord>(
  records: T[],
  sortOption: BookRecordSortType,
) => {
  const copied = records.slice();
  if (sortOption === BOOK_RECORD_SORT_TYPES.CREATED_AT.value) {
    return copied.sort((a, b) => {
      const aDate = toDate(a.createdAt);
      const bDate = toDate(b.createdAt);
      return isBefore(aDate, bDate) ? -1 : 1;
    });
  }
  return copied.sort((a, b) => {
    if (a.updatedAt && b.updatedAt) {
      const aDate = toDate(a.updatedAt);
      const bDate = toDate(b.updatedAt);
      return isBefore(aDate, bDate) ? 1 : -1; // 최신 업데이트가 먼저 오도록 정렬
    }
    if (a.updatedAt && !b.updatedAt) {
      return -1; // 업데이트된 레코드가 우선
    }
    if (!a.updatedAt && b.updatedAt) {
      return 1; // 업데이트되지 않은 레코드는 나중
    }
    return 0; // 둘 다 업데이트되지 않은 경우
  });
};
