import type { GetBookMemosRequest } from "./getBookMemos";
import type { GetBooksSearchRequest } from "./getBooksSearch";
import type { GetRecordsRequest } from "./getRecords";

export const recordQueryKeys = {
  all: () => ["record"],
  getBooksSearch: (param: GetBooksSearchRequest) => [
    ...recordQueryKeys.all(),
    "getBooksSearch",
    param,
  ],
  allGetRecord: () => [...recordQueryKeys.all(), "getRecords"],
  getRecords: (request: GetRecordsRequest) => [...recordQueryKeys.allGetRecord(), request.userId],
  getMemos: (request: GetBookMemosRequest) => [
    ...recordQueryKeys.all(),
    "getMemos",
    request.userId,
    request.recordId,
  ],
};
