import { http } from "@repo/http";
import { useMutation } from "@tanstack/react-query";

interface PatchMemoDetailRequest {
  recordId: string;
  memoId: string;
  content: string;
}

export const patchMemoDetail = async (props: PatchMemoDetailRequest) => {
  const { content, recordId, memoId } = props;
  const response = await http.patch(`records/${recordId}/memos/${memoId}`, { content });

  return response.data;
};

export const usePatchMemoDetail = () => {
  return useMutation({ mutationFn: patchMemoDetail });
};
