import { http } from "@repo/http";
import { queryOptions } from "@tanstack/react-query";
import { authStore } from "~/entities/user/model/auth.store";
import { guestRecordStore } from "../model/guestRecordStore";
import type { BookRecordDetail } from "../model/record.model";
import { recordQueryKeys } from "./record.querykey";

export interface GetBookMemosRequest {
  recordId: string;
}

export type GetRecordDetailResponse = BookRecordDetail;

const getRecordsDetail = async (params: GetBookMemosRequest) => {
  const { recordId } = params;

  const response = await http.get<GetRecordDetailResponse>(`records/${recordId}`);

  return {
    ...response.data,
    recordId: response.data.recordId.toString(),
    book: { ...response.data.book, bookId: response.data.book.bookId.toString() },
    memos: response.data.memos.map((memo) => ({
      ...memo,
      memoId: memo.memoId.toString(),
    })),
  } satisfies GetRecordDetailResponse;
};

const guestGetRecordsDetail = async (request: GetBookMemosRequest) => {
  const { recordId } = request;
  const memoList = guestRecordStore.getItem();
  const memo = memoList.find((memo) => memo.recordId.toString() === recordId.toString());
  if (!memo) {
    throw new Error("메모가 존재하지 않습니다.");
  }

  return {
    ...memo,
    recordId: memo?.recordId.toString() ?? "",
    book: { ...memo?.book },
    memos: memo?.memos.map((memo) => ({
      ...memo,
      memoId: memo.memoId.toString(),
    })),
    updatedAt: memo?.updatedAt ?? "",
    createdAt: memo?.createdAt ?? "",
    updatedGauge: memo?.updatedGauge ?? 0,
  } satisfies GetRecordDetailResponse;
};

export const useGetRecordsDetailQueryOptions = (request: GetBookMemosRequest) => {
  const auth = authStore.useAuth();

  return queryOptions({
    queryKey: recordQueryKeys.getRecordById(request),
    queryFn: () => {
      if (auth.isLoggedIn) {
        return getRecordsDetail(request);
      }
      return guestGetRecordsDetail(request);
    },
  });
};
