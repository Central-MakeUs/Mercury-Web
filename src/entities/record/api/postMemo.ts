import { http } from "@repo/http";
import { useMutation } from "@tanstack/react-query";
import type { Memo } from "../model/memo.model";

interface PostMemosRequest {
  recordId: string;
  userId: string;
  content: string;
  gauge: number;
}

type PostMemosResponse = Memo;

export const postMemo = async (props: PostMemosRequest) => {
  const { recordId, userId, content, gauge } = props;
  const response = await http.post<unknown, PostMemosResponse>(
    `records/${recordId}/memos`,
    {
      content,
      gauge,
    },
    {
      searchParams: {
        userId,
      },
    },
  );

  return response.data;
};

export const usePostMemo = () => {
  return useMutation({ mutationFn: postMemo });
};
