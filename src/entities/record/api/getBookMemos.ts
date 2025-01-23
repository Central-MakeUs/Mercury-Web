import { http } from "@repo/http";
import { queryOptions } from "@tanstack/react-query";
import { recordQueryKeys } from "./record.querykey";

export interface GetBookMemosRequest {
  userId: string;
  recordId: string;
}

export const getMemos = (params: GetBookMemosRequest) => {
  const { userId, recordId } = params;

  return http.get(`records/${recordId}`, { searchParams: { userId } });
};

export const getMemosQueryOptions = (request: GetBookMemosRequest) =>
  queryOptions({
    queryKey: recordQueryKeys.getMemos(request),
    queryFn: () => getMemos(request),
  });
