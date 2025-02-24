// can guest
import { http } from "@repo/http";
import { queryOptions } from "@tanstack/react-query";
import { authStore } from "~/entities/user/model/auth.store";
import type { BookRecordSortType } from "~/features/bookRecordRead/model/bookRecord.model";
import { guestRecordStore } from "../model/guestRecordStore";
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

const guestGetRecords = async (request: GetRecordsRequest) => {
  const { sortType } = request;
  const records = guestRecordStore.getItem();
  return {
    records: records.map((record) => ({
      ...record,
      recordId: record.recordId.toString(),
      book: { ...record.book, bookId: record.book.bookId.toString() },
      memos: record.memos.map((memo) => ({
        ...memo,
        memoId: memo.memoId.toString(),
      })),
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
      updatedGauge: record.updatedGauge,
      latestMemoContent: record.memos[0].content,
      detailUpdatedAt: record.updatedAt,
    })),
  } satisfies GetRecordsResponse;
};

export const getRecordsQueryOptions = (request: GetRecordsRequest) => {
  const auth = authStore.useAuth();
  return queryOptions({
    queryKey: recordQueryKeys.getRecords(request),
    queryFn: () => {
      if (auth.isLoggedIn) {
        return getRecords(request);
      }
      return guestGetRecords(request);
    },
  });
};
