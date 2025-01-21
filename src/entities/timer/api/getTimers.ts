import { http } from "@repo/http";
import { queryOptions } from "@tanstack/react-query";
import type { Timer } from "../model/timer.model";
import { timerQueryKeys } from "./timer.querykey";

export interface GetTimersRequest {
  userId: string;
}

export interface GetTimersResponse {
  timers: Timer[];
}

export const getTimers = async (request: GetTimersRequest) => {
  const { userId } = request;
  const response = await http.get<GetTimersResponse>("/timers", {
    searchParams: {
      userId,
    },
  });
  return response.data;
};

export const getTimersQueryOptions = (request: GetTimersRequest) => {
  return queryOptions({
    queryKey: timerQueryKeys.getTimers(request.userId),
    queryFn: () => getTimers(request),
  });
};
