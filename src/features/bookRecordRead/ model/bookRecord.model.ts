export const BOOK_RECORD_SORT_OPTIONS = {
  CREATED_AT: {
    label: "생성일 순",
    value: "CREATED_AT",
  },
  UPDATED_AT: {
    label: "업데이트 순",
    value: "UPDATED_AT",
  },
} as const;

export type BookRecordSortOption =
  (typeof BOOK_RECORD_SORT_OPTIONS)[keyof typeof BOOK_RECORD_SORT_OPTIONS]["value"];

export const isBookRecordSortOption = (value: unknown): value is BookRecordSortOption => {
  return Object.values(BOOK_RECORD_SORT_OPTIONS).some((option) => option.value === value);
};
