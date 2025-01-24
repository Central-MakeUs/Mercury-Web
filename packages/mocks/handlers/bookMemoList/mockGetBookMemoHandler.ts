import { mockBookMemoList } from "@repo/mocks/db/mockBookMemoList.db";
import { http, HttpResponse } from "msw";
import { baseUrl } from "../../constants";

export const mockGetMemosHandler = [
  http.get(`${baseUrl}/records/:recordId`, async ({ params }) => {
    const _recordId = Number(params.recordId);

    return HttpResponse.json({
      code: 200,
      message: "요청이 성공적으로 처리되었습니다.",
      data: mockBookMemoList,
    });
  }),
];
