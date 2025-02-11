import { http } from "@repo/http";
import { queryOptions } from "@tanstack/react-query";
import type { BookRecordSortType } from "~/features/bookRecordRead/model/bookRecord.model";
import type { BookRecord } from "../model/record.model";
import { recordQueryKeys } from "./record.querykey";

export interface GetRecordsResponse {
  records: BookRecord[];
}

export interface GetRecordsRequest {
  sortType: BookRecordSortType;
}

export const getRecords = async (request: GetRecordsRequest) => {
  const { sortType } = request;
  const response = await http.get<GetRecordsResponse>(`/records`, {
    searchParams: {
      sortType,
    },
  });
  return {
    ...response.data,
    records: response.data.records.map((record) => ({
      ...record,
      recordId: record.recordId.toString(),
      book: { ...record.book, bookId: record.book.bookId.toString() },
    })),
  } satisfies GetRecordsResponse;
};

export const getRecordsQueryOptions = (request: GetRecordsRequest) =>
  queryOptions({
    queryKey: recordQueryKeys.getRecords(request),
    queryFn: () => getRecords(request),
  });
