import { http } from "@repo/http";
import { queryOptions } from "@tanstack/react-query";
import type { Book } from "../model/book.model";
import { recordQueryKeys } from "./record.querykey";

export const GET_BOOKS_SEARCH_SORT_TYPE = {
  ACCURACY: "ACCURACY",
  PUBLISH_TIME: "PUBLISH_TIME",
} as const;

export type GetBooksSearchSortType =
  (typeof GET_BOOKS_SEARCH_SORT_TYPE)[keyof typeof GET_BOOKS_SEARCH_SORT_TYPE];

export interface GetBooksSearchRequest {
  query: string;
  sortType: GetBooksSearchSortType;
  startPage: number;
  maxResults: number;
}

export interface GetBooksSearchResponse {
  books: Book[];
  totalResults: number;
  currentResults: number;
  currentPage: number;
  hasNext: boolean;
}

export const getBooksSearch = async (param: GetBooksSearchRequest) => {
  const searchParams = {
    query: param.query,
    sortType: param.sortType,
    startPage: param.startPage.toString(),
    maxResults: param.maxResults.toString(),
  };

  const response = await http.get<GetBooksSearchResponse>(`/books/search`, {
    searchParams,
  });

  return response.data;
};

export const getBooksSearchQueryOptions = (param: GetBooksSearchRequest) => {
  return queryOptions({
    queryKey: recordQueryKeys.getBooksSearch(param),
    queryFn: () => getBooksSearch(param),
    retry: 0,
  });
};
