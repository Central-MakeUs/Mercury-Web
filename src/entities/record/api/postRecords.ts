import { http } from "@repo/http";
import { useMutation } from "@tanstack/react-query";
import { authStore } from "~/entities/user/model/auth.store";
import { generateRandomId } from "~/shared/utils/generateRandomId";
import type { Book, BookWithId } from "../model/book.model";
import { guestRecordStore } from "../model/guestRecordStore";
import type { BookRecordDetail } from "../model/record.model";

export interface PostRecordsRequest {
  book: Book;
  content: string;
  gauge: number;
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

const postRecords = async (request: PostRecordsRequest) => {
  const { ...rest } = request;
  const response = await http.post<PostRecordsRequest, PostRecordsResponse>(`/records`, rest);
  return response.data;
};

const guestPostRecords = async (request: PostRecordsRequest) => {
  const response = guestRecordStore.getItem();
  const createdAt = new Date().toISOString();
  const updatedAt = new Date().toISOString();
  guestRecordStore.setItem(
    response.concat({
      recordId: generateRandomId(),
      book: { ...request.book, bookId: generateRandomId() },
      createdAt,
      updatedAt,
      updatedGauge: request.gauge,
      memos: [
        {
          content: request.content,
          createdAt,
          updatedAt,
          gauge: request.gauge,
          memoId: generateRandomId(),
          recordId: generateRandomId(),
        },
      ],
    } satisfies BookRecordDetail),
  );
  const item = guestRecordStore.getItem();
  return {
    recordId: Number(item[item.length - 1].recordId),
    createdAt,
    updatedAt,
    book: { ...request.book, bookId: item[item.length - 1].book.bookId },
    detailUpdatedAt: updatedAt,
    latestMemoContent: "",
    updatedGauge: 0,
  } satisfies PostRecordsResponse;
};

export const usePostRecords = () => {
  const auth = authStore.useAuth();
  const mutationFn = auth.isLoggedIn ? postRecords : guestPostRecords;
  return useMutation({ mutationFn });
};
