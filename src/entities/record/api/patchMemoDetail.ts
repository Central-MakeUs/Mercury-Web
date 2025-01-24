import { http } from "@repo/http";
import { useMutation } from "@tanstack/react-query";

interface PatchMemoDetailRequest {
  recordId: string;
  memoId: string;
  userId: string;
  content: string;
}

export const patchMemoDetail = async (props: PatchMemoDetailRequest) => {
  const { content, recordId, memoId, userId } = props;
  const response = await http.patch(
    `records/${recordId}/memos/${memoId}`,
    { content },
    {
      searchParams: {
        userId,
      },
    },
  );

  return response.data;
};

export const usePatchMemoDetail = () => {
  return useMutation({ mutationFn: patchMemoDetail });
};
