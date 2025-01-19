import type { KyResponse } from "ky";

export type ApiSuccessResponse<T> = {
  success: true;
  data: T;
  code: number;
  message: string;
  response: KyResponse<T>;
};

export type ApiErrorResponse = {
  code: string;
  message: string;
  data: null;
};
