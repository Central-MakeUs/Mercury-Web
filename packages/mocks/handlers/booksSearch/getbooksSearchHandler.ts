import { http, HttpResponse } from "msw";
import type { GetBooksSearchSortType } from "~/entities/record/api/getBooksSearch";
import { baseUrl } from "../../constants";
import { mockCreateGetBooksSearchResponse } from "./getBooksSearch.mock";

export const getBooksSearchHandler = [
  http.get(`${baseUrl}/books/search`, ({ request }) => {
    const url = new URL(request.url);

    const query = url.searchParams.get("query") ?? "";
    const maxResults = Number(url.searchParams.get("maxResults")) ?? 10;
    const sortType = url.searchParams.get("sortType") as GetBooksSearchSortType;
    const startPage = Number(url.searchParams.get("startPage")) ?? 1;

    return HttpResponse.json(
      mockCreateGetBooksSearchResponse({ query, maxResults, sortType, startPage }),
    );
  }),
];
