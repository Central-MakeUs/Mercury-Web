import { http } from "@repo/http";
import { queryOptions } from "@tanstack/react-query";
import { recordQueryKeys } from "./record.querykey";

export interface GetBookMemosRequest {
  userId: string;
  recordId: string;
}

export interface BookMemosResponse {
  book: {
    author: string;
    //bookId: number;
    coverImageUrl: string;
    publisher: string;
    title: string;
  };
  updatedGauge: number;
  recordId: string;
  memos: {
    content: string;
    updatedAt: string;
    //createdAt: string;
    memoId: number;
    recordId: number;
  }[];
}

export const getMemos = async (params: GetBookMemosRequest) => {
  const { userId, recordId } = params;

  const response = await http.get<BookMemosResponse>(`records/${recordId}`, {
    searchParams: { userId },
  });

  return response.data;
};

export const getMemosQueryOptions = (request: GetBookMemosRequest) =>
  queryOptions({
    queryKey: recordQueryKeys.getMemos(request),
    queryFn: () => getMemos(request),
  });
