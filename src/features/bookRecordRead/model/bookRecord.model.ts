export const BOOK_RECORD_SORT_TYPES = {
  CREATED_AT: {
    label: "생성일 순",
    value: "CREATED_AT",
  },
  UPDATED_AT: {
    label: "업데이트 순",
    value: "UPDATED_AT",
  },
} as const;

export type BookRecordSortType =
  (typeof BOOK_RECORD_SORT_TYPES)[keyof typeof BOOK_RECORD_SORT_TYPES]["value"];

export const isBookRecordSortType = (value: unknown): value is BookRecordSortType => {
  return Object.values(BOOK_RECORD_SORT_TYPES).some((option) => option.value === value);
};
