import { http, HttpResponse } from "msw";
import { baseUrl } from "../../constants";

export const mockGetRecordsHandler = [
  http.get(`${baseUrl}/users/test/get-or-create`, () => {
    return HttpResponse.json({
      code: 200,
      message: "요청이 성공적으로 처리되었습니다.",
      data: {
        createdAt: "2025-01-21T22:16:37.203942",
        updatedAt: "2025-01-21T22:16:37.203942",
        user_id: "231",
        nickname: "TestUser_17",
        email: "test17@test.com",
        exp: 0,
        testUserId: "13213217",
      },
    });
  }),
];
