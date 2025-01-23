import { mockGetMemosHandler } from "./bookMemoList/mockGetBookMemoHandler";
import { mockGetBooksSearchHandler } from "./booksSearch/mockGetbooksSearchHandler";
import { mockHandler } from "./mock/mockHandler";
import { mockGetRecordsHandler } from "./record/mockGetRecords";

export const handlers = [
  ...mockHandler,
  ...mockGetBooksSearchHandler,
  ...mockGetRecordsHandler,
  ...mockGetMemosHandler,
];
