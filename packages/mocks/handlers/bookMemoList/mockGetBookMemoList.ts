import { mockBookMemoList } from "@repo/mocks/db/mockBookMemoList.db";

export const mockCreateGetBooksSearchResponse = () => {
  return {
    code: 200,
    message: "요청이 성공적으로 처리되었습니다.",
    data: JSON.stringify(mockBookMemoList),
  };
};
