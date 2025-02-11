import type { GetBooksSearchRequest } from "./getBooksSearch";
import type { GetBookMemosRequest } from "./getRecordDetail";
import type { GetRecordsRequest } from "./getRecords";

export const recordQueryKeys = {
  all: () => ["record"],
  getBooksSearch: (param: GetBooksSearchRequest) => [
    ...recordQueryKeys.all(),
    "getBooksSearch",
    param,
  ],
  allGetRecords: () => [...recordQueryKeys.all(), "getRecords"],
  allGetRecordDetail: () => [...recordQueryKeys.all(), "getRecordDetail"],
  getRecords: (request: GetRecordsRequest) => [...recordQueryKeys.allGetRecords(), request],
  getRecordById: (request: Pick<GetBookMemosRequest, "recordId">) => [
    ...recordQueryKeys.allGetRecordDetail(),
    request.recordId,
  ],
};
