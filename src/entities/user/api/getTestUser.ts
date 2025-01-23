import { http } from "@repo/http";
import { queryOptions } from "@tanstack/react-query";
import { useTestUserStore } from "../model/useTestUserStore";

export interface ExternalGetTestUserResponse {
  createdAt: string;
  updatedAt: string;
  //   user_id: string; // 담겨오지만 사용하지않음
  nickname: string;
  email: string;
  exp: number;
  testUserId: string; // 유저아이디 요청이 필요한 경우 이 유저아이디 사용
}

export interface GetTestUserResponse {
  createdAt: string;
  updatedAt: string;
  //   user_id: string; // 담겨오지만 사용하지않음
  nickname: string;
  email: string;
  exp: number;
  userId: string; // 유저아이디 요청이 필요한 경우 이 유저아이디 사용
}

export const getTestUser = async (userId: string) => {
  const response = await http.get<ExternalGetTestUserResponse>(`/users/test/get-or-create`, {
    searchParams: {
      userId,
    },
  });
  const { testUserId, ...rest } = response.data;

  return {
    ...rest,
    userId: testUserId,
  } satisfies GetTestUserResponse;
};

export const getTestUserQueryOptions = (userId: string) => {
  return queryOptions({
    queryKey: ["testUser", userId],
    queryFn: () => getTestUser(userId),
  });
};

export const useTestUserQueryOptions = () => {
  const userId = useTestUserStore((state) => state.userId);
  return getTestUserQueryOptions(userId);
};
