import { http, HttpResponse } from "msw";
import { baseUrl } from "../../constants";
import { mockCreateGetBooksSearchResponse } from "./getBooksSearch.mock";

export const getBooksSearchHandler = [
  http.get(`${baseUrl}/books/search`, () => {
    return HttpResponse.json(mockCreateGetBooksSearchResponse());
  }),
];
