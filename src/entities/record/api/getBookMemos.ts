import type { MemoList } from "../model/memo.model";

export interface GetBookMemosResponse {
  data: MemoList;
}

export interface GetBookMemosRequest {
  userId: string;
  recordId: number;
}

// export const getMemos = async (request: GetBookMemosRequest) => {
//   const { userId, recordId } = request;
//   const response = await http.get<GetBookMemosResponse>(`/records/${recordId}`, {
//     searchParams: {
//       userId,
//     },
//   });
//   return response.data;
// };

// export const getMemosQueryOptions = (request: GetBookMemosRequest) =>
//   queryOptions({
//     queryKey: recordQueryKeys.getMemos(request),
//     queryFn: () => getMemos(request),
//   });
