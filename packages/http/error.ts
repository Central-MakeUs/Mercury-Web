import { HTTPError } from "ky";

export const isHttpError = (error: unknown): error is HTTPError => {
  return error instanceof HTTPError;
};
