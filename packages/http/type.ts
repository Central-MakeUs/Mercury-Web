import type { KyResponse } from "ky";

export type ApiSuccessResponse<T> = {
  success: true;
  data: T;
  status: number;
  response: KyResponse<T>;
};
