import type { GetBooksSearchRequest } from "./getBooksSearch";
import type { GetRecordsRequest } from "./getRecords";

export const recordQueryKeys = {
  all: () => ["record"],
  getBooksSearch: (param: GetBooksSearchRequest) => [
    ...recordQueryKeys.all(),
    "getBooksSearch",
    param,
  ],
  getRecords: (request: GetRecordsRequest) => [
    ...recordQueryKeys.all(),
    "getRecords",
    request.userId,
  ],
};
