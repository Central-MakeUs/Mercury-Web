import { http } from "@repo/http";
import { queryOptions } from "@tanstack/react-query";
import type { BookRecordSortType } from "~/features/bookRecordRead/model/bookRecord.model";
import type { BookRecord } from "../model/record.model";
import { recordQueryKeys } from "./record.querykey";

export interface GetRecordsResponse {
  records: BookRecord[];
}

export interface GetRecordsRequest {
  userId: string;
  sortType: BookRecordSortType;
}

export const getRecords = async (request: GetRecordsRequest) => {
  const { userId, sortType } = request;
  const response = await http.get<GetRecordsResponse>(`/records`, {
    searchParams: {
      userId,
      sortType,
    },
  });
  return response.data;
};

export const getRecordsQueryOptions = (request: GetRecordsRequest) =>
  queryOptions({
    queryKey: recordQueryKeys.getRecords(request),
    queryFn: () => getRecords(request),
  });
