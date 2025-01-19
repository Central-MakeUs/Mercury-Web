import { mockSearchBooksDb } from "@repo/mocks/db/mockSearchBooks.db";
import type { GetBooksSearchRequest } from "~/entities/record/api/getBooksSearch";

export const mockCreateGetBooksSearchResponse = (param: GetBooksSearchRequest) => {
  const { query, maxResults, sortType, startPage } = param;
  const filteredBooks = mockSearchBooksDb.filter((book) => book.title.includes(query));
  const startIndex = (startPage - 1) * maxResults;
  const endIndex = startIndex + maxResults;
  const books = filteredBooks.slice(startIndex, endIndex);

  return {
    code: 200,
    message: "요청이 성공적으로 처리되었습니다.",
    data: {
      books,
      totalResults: filteredBooks.length,
      currentResults: books.length,
      currentPage: startPage,
      hasNext: endIndex < filteredBooks.length,
    },
  };
};
