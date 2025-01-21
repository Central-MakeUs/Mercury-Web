import { http } from "@repo/http";
import { useMutation } from "@tanstack/react-query";

interface PostTimersRequest {
  userId: string;
  seconds: number;
}

interface PostTimersResponse {
  timerId: string;
  recordedTime: number;
  acquiredExp: number;
  createdAt: string;
  updatedAt: string;
  userId: string;
}

export const postTimers = async (request: PostTimersRequest) => {
  const { userId, seconds } = request;
  const response = await http.post<Pick<PostTimersRequest, "seconds">, PostTimersResponse>(
    "/timers",
    {
      seconds,
    },
    {
      searchParams: {
        userId,
      },
    },
  );
  return response.data;
};

export const usePostTimers = () => {
  return useMutation({ mutationFn: postTimers });
};
