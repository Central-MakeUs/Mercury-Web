import { http } from "@repo/http";
import { useMutation } from "@tanstack/react-query";
import type { Timer } from "../model/timer.model";

export interface PostTimersRequest {
  seconds: number;
  userId: string;
}

export type PostTimersResponse = Timer[];

export const postTimers = async (request: PostTimersRequest) => {
  const { userId, ...rest } = request;
  const response = await http.post<Omit<PostTimersRequest, "userId">, PostTimersResponse>(
    `/timers`,
    rest,
    {
      searchParams: {
        userId,
      },
    },
  );
  return response.data;
};

export const usePostTimers = () => {
  return useMutation({
    mutationFn: postTimers,
  });
};
