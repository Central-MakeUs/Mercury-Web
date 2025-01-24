import { http } from "@repo/http";
import { queryOptions } from "@tanstack/react-query";
import { recordQueryKeys } from "./record.querykey";

export interface DeleteBookMemosRequest {
  userId: string;
  recordId: string;
}

export const deleteMemos = async (params: DeleteBookMemosRequest) => {
  const { userId, recordId } = params;

  const response = await http.delete(`records/${recordId}`, {
    searchParams: { userId },
  });

  return response.data;
};

export const deleteMemosQueryOptions = (request: DeleteBookMemosRequest) =>
  queryOptions({
    queryKey: recordQueryKeys.deleteMemos(request),
    queryFn: () => deleteMemos(request),
    gcTime: 0,
  });
