import { http } from "@repo/http";
import { useMutation } from "@tanstack/react-query";
import type { Timer } from "../model/timer.model";

export interface PostTimersRequest {
  seconds: number;
  deviceTime?: string;
}

export type PostTimersResponse = Timer[];

export const postTimers = async (request: PostTimersRequest) => {
  const { deviceTime, ...rest } = request;

  const body = {
    ...rest,
    deviceTime: deviceTime ?? new Date().toISOString(),
  };

  const response = await http.post<Omit<PostTimersRequest, "userId">, PostTimersResponse>(
    `/timers`,
    body,
  );
  return response.data;
};

export const usePostTimers = () => {
  return useMutation({
    mutationFn: postTimers,
  });
};
