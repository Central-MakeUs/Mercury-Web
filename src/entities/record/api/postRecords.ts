import { http } from "@repo/http";
import { useMutation } from "@tanstack/react-query";
import type { Book, BookWithId } from "../model/book.model";

export interface PostRecordsRequest {
  book: Book;
  content: string;
  gauge: number;
  userId: string;
}

export interface PostRecordsResponse {
  recordId: number;
  createdAt: string;
  updatedAt: string;
  book: BookWithId;
  detailUpdatedAt: string;
  latestMemoContent: string;
  updatedGauge: number;
}

export const postRecords = async (request: PostRecordsRequest) => {
  const { userId, ...rest } = request;
  const response = await http.post<Omit<PostRecordsRequest, "userId">, PostRecordsResponse>(
    `/records`,
    rest,
    {
      searchParams: {
        userId,
      },
    },
  );
  return response.data;
};

export const usePostRecords = () => {
  return useMutation({
    mutationFn: postRecords,
  });
};
