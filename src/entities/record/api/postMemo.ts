import { http } from "@repo/http";
import { useMutation } from "@tanstack/react-query";
import type { Memo } from "../model/memo.model";

interface PostMemosRequest {
  recordId: string;
  content: string;
  gauge: number;
}

type PostMemosResponse = Memo;

export const postMemo = async (props: PostMemosRequest) => {
  const { recordId, content, gauge } = props;
  const response = await http.post<unknown, PostMemosResponse>(`records/${recordId}/memos`, {
    content,
    gauge,
  });

  return response.data;
};

export const usePostMemo = () => {
  return useMutation({ mutationFn: postMemo });
};
