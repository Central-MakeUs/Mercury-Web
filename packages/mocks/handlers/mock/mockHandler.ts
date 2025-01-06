import { http, HttpResponse } from "msw";
import { baseUrl } from "../../constants";

export const mockHandler = [
  http.get(`${baseUrl}/mock`, () => {
    return HttpResponse.json({
      status: "hello",
      data: "hello world",
      message: "hello world",
    });
  }),
];
