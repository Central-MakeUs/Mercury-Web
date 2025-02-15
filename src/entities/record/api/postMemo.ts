// can guest

import { http } from "@repo/http";
import { useMutation } from "@tanstack/react-query";
import { authStore } from "~/entities/user/model/auth.store";
import { generateRandomId } from "~/shared/utils/generateRandomId";
import { guestRecordStore } from "../model/guestRecordStore";
import type { Memo } from "../model/memo.model";

interface PostMemosRequest {
  recordId: string;
  content: string;
  gauge: number;
  deviceTime: string;
}

type PostMemosResponse = Memo;

export const postMemo = async (props: PostMemosRequest) => {
  const { recordId, content, gauge, deviceTime } = props;
  const response = await http.post<unknown, PostMemosResponse>(`records/${recordId}/memos`, {
    content,
    gauge,
    deviceTime,
  });

  return response.data;
};

const guestPostMemo = async (props: PostMemosRequest) => {
  const { recordId, content, gauge, deviceTime } = props;
  const memoList = guestRecordStore.getItem();
  const id = generateRandomId();
  const createdAt = new Date().toISOString();
  const updatedAt = new Date().toISOString();
  guestRecordStore.setItem(
    memoList.map((item) => {
      if (item.recordId.toString() !== recordId.toString()) {
        return item;
      }

      return {
        ...item,
        memos: [
          ...item.memos,
          {
            content,
            gauge,
            memoId: id,
            createdAt,
            updatedAt,
            recordId,
            deviceTime,
          },
        ],
      };
    }),
  );
  return {
    content,
    gauge,
    memoId: id,
    createdAt,
    updatedAt,
    recordId,
    deviceTime,
  };
};

export const usePostMemo = () => {
  const auth = authStore.useAuth();
  const mutationFn = auth.isLoggedIn ? postMemo : guestPostMemo;
  return useMutation({ mutationFn });
};
