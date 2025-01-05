import type { KyInstance } from "ky";
import type { Options } from "ky";
import { createInstance } from "./createInstance";
import { createResponse } from "./createResponse";
import { handleError } from "./handleError";
import type { ApiSuccessResponse } from "./type";

function isKyInstance(instance: any): instance is KyInstance {
  return instance && typeof instance.get === "function" && typeof instance.post === "function";
}

const removeLeadingSlash = (url: string) => (url.startsWith("/") ? url.slice(1) : url);

export const createHttp = (instance?: KyInstance | Options) => {
  const kyInstance = isKyInstance(instance) ? instance : createInstance(instance);

  const http = {
    get: async function get<TResponse = unknown>(
      url: string,
      options?: Options,
    ): Promise<ApiSuccessResponse<TResponse>> {
      try {
        const response = await kyInstance.get<TResponse>(`${removeLeadingSlash(url)}`, options);
        return createResponse<TResponse>(response);
      } catch (e) {
        handleError(e);
        throw e;
      }
    },
    post: async function post<Request = any, TResponse = unknown>(
      url: string,
      payload?: Request,
      options?: Options,
    ): Promise<ApiSuccessResponse<TResponse>> {
      try {
        const response = await kyInstance.post<TResponse>(`${removeLeadingSlash(url)}`, {
          json: payload,
          ...options,
        });
        return createResponse<TResponse>(response);
      } catch (e) {
        handleError(e);
        throw e;
      }
    },
    put: async function put<Request = any, TResponse = unknown>(
      url: string,
      payload?: Request,
      options?: Options,
    ): Promise<ApiSuccessResponse<TResponse>> {
      try {
        const response = await kyInstance.put<TResponse>(`${removeLeadingSlash(url)}`, {
          json: payload,
          ...options,
        });
        return createResponse<TResponse>(response);
      } catch (e) {
        handleError(e);
        throw e;
      }
    },
    delete: async function kydelete<TResponse = unknown>(
      url: string,
      options?: Options,
    ): Promise<ApiSuccessResponse<TResponse>> {
      try {
        const response = await kyInstance.delete<TResponse>(`${removeLeadingSlash(url)}`, options);
        return createResponse<TResponse>(response);
      } catch (e) {
        handleError(e);
        throw e;
      }
    },
    patch: async function patch<Request = any, TResponse = unknown>(
      url: string,
      payload?: Request,
      options?: Options,
    ): Promise<ApiSuccessResponse<TResponse>> {
      try {
        const response = await kyInstance.patch<TResponse>(`${removeLeadingSlash(url)}`, {
          json: payload,
          ...options,
        });
        const result = createResponse<TResponse>(response);
        return result;
      } catch (e) {
        handleError(e);
        throw e;
      }
    },
  };
  return http;
};

export type Http = ReturnType<typeof createHttp>;
