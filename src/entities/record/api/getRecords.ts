import { http } from "@repo/http";
import { queryOptions } from "@tanstack/react-query";
import type { BookRecord } from "../model/record.model";
import { recordQueryKeys } from "./record.querykey";

interface GetRecordsResponse {
  records: BookRecord[];
}

export const getRecords = async () => {
  const response = await http.get<GetRecordsResponse>(`/records`);
  return response.data;
};

export const getRecordsQueryOptions = () =>
  queryOptions({
    queryKey: recordQueryKeys.getRecords(),
    queryFn: getRecords,
  });
