import { http } from "@repo/http";
import { queryOptions } from "@tanstack/react-query";
import type { BookRecordDetail } from "../model/record.model";
import { recordQueryKeys } from "./record.querykey";

export interface GetBookMemosRequest {
  userId: string;
  recordId: string;
}

export type GetRecordDetailResponse = BookRecordDetail;

export const getRecordsDetail = async (params: GetBookMemosRequest) => {
  const { userId, recordId } = params;

  const response = await http.get<GetRecordDetailResponse>(`records/${recordId}`, {
    searchParams: { userId },
  });

  return response.data;
};

export const getRecordsDetailQueryOptions = (request: GetBookMemosRequest) =>
  queryOptions({
    queryKey: recordQueryKeys.getRecordById(request),
    queryFn: () => getRecordsDetail(request),
  });
