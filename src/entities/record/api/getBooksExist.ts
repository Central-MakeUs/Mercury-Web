import { http } from "@repo/http";

interface GetRecordsResponse {
  isRegistered: boolean;
  recordId: number;
}

export const getBooksExist = async (isbn13: string): Promise<GetRecordsResponse> => {
  const response = await http.get<GetRecordsResponse>(`/books/exist`, {
    searchParams: { isbn13 },
  });

  return {
    isRegistered: response.data?.isRegistered ?? false,
    recordId: response.data?.recordId ?? -1,
  };
};
