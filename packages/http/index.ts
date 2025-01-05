import { env } from "@repo/env";
import { createHttp } from "./createHttp";
import { isHttpError } from "./error";
import type { ApiSuccessResponse } from "./type";

const http = createHttp({ prefixUrl: env.VITE_API_URL });

export { createHttp, isHttpError, http };

export type { ApiSuccessResponse };
