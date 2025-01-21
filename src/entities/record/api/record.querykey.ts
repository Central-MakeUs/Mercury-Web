import type { GetBooksSearchRequest } from "./getBooksSearch";

export const recordQueryKeys = {
  all: () => ["record"],
  getBooksSearch: (param: GetBooksSearchRequest) => [
    ...recordQueryKeys.all(),
    "getBooksSearch",
    param,
  ],
  getRecords: () => [...recordQueryKeys.all(), "getRecords"],
};
