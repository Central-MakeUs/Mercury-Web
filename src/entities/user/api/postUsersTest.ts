import { http } from "@repo/http";

type PostUsersTestRequestBody = {
  email: string;
  isShortLivedAccessToken?: boolean;
};

type PostUsersTestResponse = {
  id: number | string;
  nickname: string;
  email: string;
  exp: number;
};

export const postUsersTest = async (body: PostUsersTestRequestBody) => {
  const response = await http.post<PostUsersTestRequestBody, PostUsersTestResponse>(
    "/users/test",
    body,
  );
  return response.data;
};
