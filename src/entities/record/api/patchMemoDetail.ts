// can guest
import { http } from "@repo/http";
import { useMutation } from "@tanstack/react-query";
import { authStore } from "~/entities/user/model/auth.store";
import { guestRecordStore } from "../model/guestRecordStore";

interface PatchMemoDetailRequest {
  recordId: string;
  memoId: string;
  content: string;
}

const patchMemoDetail = async (props: PatchMemoDetailRequest) => {
  const { content, recordId, memoId } = props;
  const response = await http.patch(`records/${recordId}/memos/${memoId}`, { content });

  return response.data;
};

const guestPatchMemoDetail = async (props: PatchMemoDetailRequest) => {
  const { content, recordId, memoId } = props;
  const memoList = guestRecordStore.getItem();
  const memo = memoList.find((memo) => memo.recordId.toString() === recordId.toString());
  if (!memo) {
    throw new Error("메모가 존재하지 않습니다.");
  }

  const newItem = memoList.map((item) => {
    if (item.recordId.toString() !== recordId.toString()) {
      return item;
    }

    return {
      ...item,
      memos: item.memos.map((memo) => {
        if (memo.memoId.toString() !== memoId.toString()) {
          return memo;
        }

        return {
          ...memo,
          content,
        };
      }),
    };
  });

  guestRecordStore.setItem(newItem);
};

export const usePatchMemoDetail = () => {
  const auth = authStore.useAuth();
  const mutationFn = auth.isLoggedIn ? patchMemoDetail : guestPatchMemoDetail;
  return useMutation({ mutationFn });
};
