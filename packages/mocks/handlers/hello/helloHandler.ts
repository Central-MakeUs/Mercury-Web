import { http, HttpResponse } from "msw";
import { baseUrl } from "../../constants";

export const helloHandler = [
  http.get(`${baseUrl}/hello`, () => {
    return HttpResponse.json({
      status: "hello",
      data: "hello world",
      message: "hello world",
    });
  }),
];
