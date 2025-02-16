import type { KyResponse } from "ky";
import { z } from "zod";
import type { ApiSuccessResponse } from "./type";

const apiSchema = z.object({
  code: z.any(),
  message: z.string(),
  data: z.any(),
});

export const createResponse = async <T>(
  response: KyResponse<T>,
): Promise<ApiSuccessResponse<T>> => {
  const data = await response.clone().json();
  try {
    const parsed = apiSchema.parse(data);
    return {
      success: true,
      data: parsed.data,
      code: parsed.code,
      message: parsed.message,
      response: response,
    };
  } catch (_e) {
    return {
      success: true,
      data: data,
      code: 0,
      message: "",
      response: response,
    } as ApiSuccessResponse<T>;
  }
};
