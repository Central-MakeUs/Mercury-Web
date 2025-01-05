import { helloHandler } from "./hello/hello-handler";
import { mockHandler } from "./mock/mockHandler";

export const handlers = [...helloHandler, ...mockHandler];
