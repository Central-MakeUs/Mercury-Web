import { http, HttpResponse } from "msw";
import { baseUrl } from "../../constants";
import { mockCreateGetBooksSearchResponse } from "./mockGetBookMemoList";

export const mockGetBooksSearchHandler = [
  http.get(`${baseUrl}/records/{recordId}`, () => {
    return HttpResponse.json(mockCreateGetBooksSearchResponse());
  }),
];
