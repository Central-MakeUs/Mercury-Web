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
      async (request, options, response) => {
        if (response.status === 401) {
          const data = (await response.clone().json()) as { message: string };
          if (data?.message?.includes("만료된 access 토큰입니다")) {
            try {
              const response = await instance.post("auth/refresh");
              const accessToken = response.headers.get("Authorization");
              authStore.setAccessToken(accessToken);
              try {
                //@ts-expect-error
                options.context = { ...options.context, retried: true };
                let newRequestUrl = request.url.replace(env.VITE_API_URL, "");
                if (newRequestUrl.startsWith("/")) {
                  newRequestUrl = newRequestUrl.slice(1);
                }

                const retryResponse = await instance(newRequestUrl, {
                  ...options,
                });
                return retryResponse;
              } catch (_e) {
                return response;
              }
            } catch (_e) {
              authStore.setAccessToken(null);
              return response;
            }
          }
        }
        return response;
      },
    ],
  },
});

const http = createHttp(instance);

export { createHttp, isHttpError, http };

export type { ApiSuccessResponse };
