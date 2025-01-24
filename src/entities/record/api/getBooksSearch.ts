import { http } from "@repo/http";
import { infiniteQueryOptions } from "@tanstack/react-query";
import type { Book } from "../model/book.model";
import { recordQueryKeys } from "./record.querykey";

export const GET_BOOKS_SEARCH_SORT_TYPE = {
  SALES_POINT: {
    value: "SALES_POINT",
    label: "판매량",
  },
  PUBLISH_TIME: {
    value: "PUBLISH_TIME",
    label: "출간일",
  },
} as const;

export type GetBooksSearchSortType =
  (typeof GET_BOOKS_SEARCH_SORT_TYPE)[keyof typeof GET_BOOKS_SEARCH_SORT_TYPE]["value"];

export const isGetBooksSearchSortType = (value: unknown): value is GetBooksSearchSortType => {
  return Object.values(GET_BOOKS_SEARCH_SORT_TYPE).some((sortType) => sortType.value === value);
};

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

export const getBooksSearchInfiniteQueryOptions = (param: GetBooksSearchRequest) => {
  return infiniteQueryOptions({
    queryKey: recordQueryKeys.getBooksSearch(param),
    queryFn: () => getBooksSearch(param),
    retry: 0,
    initialPageParam: param,
    getNextPageParam: (lastPage) => {
      if (lastPage.hasNext) {
        const nextPage = lastPage.currentPage + 1;
        return { ...param, startPage: nextPage };
      }
    },
    enabled: param.query.length > 0,
  });
};
