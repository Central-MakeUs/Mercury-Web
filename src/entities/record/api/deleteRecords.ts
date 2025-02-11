// can guest
import { http } from "@repo/http";
import { useMutation } from "@tanstack/react-query";
import { authStore } from "~/entities/user/model/auth.store";
import { guestRecordStore } from "../model/guestRecordStore";

export interface DeleteRecordsRequest {
  recordId: string;
}

export const deleteRecords = async (props: DeleteRecordsRequest) => {
  const { recordId } = props;
  const response = await http.delete(`records/${recordId}`);

  return response.data;
};

const guestDeleteRecords = async (props: DeleteRecordsRequest) => {
  const { recordId } = props;
  const memoList = guestRecordStore.getItem();
  const newMemoList = memoList.filter((memo) => memo.recordId.toString() !== recordId.toString());
  guestRecordStore.setItem(newMemoList);
};

// 메모 전체 삭제
export const useDeleteRecords = () => {
  const auth = authStore.useAuth();
  const mutationFn = auth.isLoggedIn ? deleteRecords : guestDeleteRecords;
  return useMutation({ mutationFn });
};
