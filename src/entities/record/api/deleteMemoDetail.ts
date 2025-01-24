import { http } from "@repo/http";
import { useMutation } from "@tanstack/react-query";

interface deleteMemoDetailRequest {
  recordId: string;
  memoId: string;
  userId: string;
}

export const deleteMemoDetail = async (props: deleteMemoDetailRequest) => {
  const { recordId, memoId, userId } = props;
  const response = await http.delete(`records/${recordId}/memos/${memoId}`, {
    searchParams: {
      userId,
    },
  });

  return response.data;
};

export const useDeleteMemoDetail = () => {
  return useMutation({ mutationFn: deleteMemoDetail });
};
