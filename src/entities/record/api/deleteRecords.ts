import { http } from "@repo/http";
import { useMutation } from "@tanstack/react-query";

export interface DeleteRecordsRequest {
  recordId: string;
  userId: string;
}

export const deleteRecords = async (props: DeleteRecordsRequest) => {
  const { recordId, userId } = props;
  const response = await http.delete(`records/${recordId}`, {
    searchParams: {
      userId,
    },
  });

  return response.data;
};

// 메모 전체 삭제
export const useDeleteRecords = () => {
  return useMutation({ mutationFn: deleteRecords });
};
