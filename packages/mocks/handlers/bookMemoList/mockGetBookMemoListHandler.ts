import { http, HttpResponse } from "msw";
import { baseUrl } from "../../constants";
import { mockCreateGetBooksSearchResponse } from "./mockGetBookMemoList";

export const mockGetBooksSearchHandler = [
  http.get(`${baseUrl}/records/:recordId`, ({ params }) => {
    const _recordId = params.recordId as string; // 명시적으로 string 타입 변환

    return HttpResponse.json(mockCreateGetBooksSearchResponse());
  }),
];
