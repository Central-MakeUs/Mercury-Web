import { env } from "@repo/env";
import { authStore } from "~/entities/user/model/auth.store";
import { createHttp } from "./createHttp";
import { createInstance } from "./createInstance";
import { isHttpError } from "./error";
import type { ApiSuccessResponse } from "./type";

const instance = createInstance({
  prefixUrl: env.VITE_API_URL,
  retry: { limit: 0 },
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
  hooks: {
    beforeRequest: [
      async (request) => {
        if (typeof window === "undefined") {
          return request;
        }

        const accessToken = authStore.getAccessToken();

        if (typeof accessToken === "string") {
          request.headers.set("Authorization", accessToken);
        }
        return request;
      },
    ],
    afterResponse: [
      async (_request, _options, response) => {
        return response;
      },
    ],
  },
});

const http = createHttp(instance);

export { createHttp, isHttpError, http };

export type { ApiSuccessResponse };
