import { http } from "@repo/http";
import { useMutation } from "@tanstack/react-query";
import { authStore } from "~/entities/user/model/auth.store";
import { guestRecordStore } from "../model/guestRecordStore";

export interface DeleteMemoDetailRequest {
  recordId: string;
  memoId: string;
}

export const deleteMemoDetail = async (props: DeleteMemoDetailRequest) => {
  const { recordId, memoId } = props;
  const response = await http.delete(`records/${recordId}/memos/${memoId}`);

  return response.data;
};

const guestDeleteMemoDetail = async (props: DeleteMemoDetailRequest) => {
  const { recordId, memoId } = props;
  const memoList = guestRecordStore.getItem();
  const memo = memoList.find((memo) => memo.recordId.toString() === recordId.toString());

  if (!memo) {
    return;
  }

  const newItem = memoList.map((item) => {
    if (item.recordId.toString() !== recordId.toString()) {
      return item;
    }

    return {
      ...item,
      memos: item.memos.filter((item) => item.memoId.toString() !== memoId.toString()),
    };
  });
  guestRecordStore.setItem(newItem);
};

export const useDeleteMemoDetail = () => {
  const auth = authStore.useAuth();
  const mutationFn = auth.isLoggedIn ? deleteMemoDetail : guestDeleteMemoDetail;
  return useMutation({ mutationFn });
};
