import { getBooksSearchHandler } from "./booksSearch/getbooksSearchHandler";
import { helloHandler } from "./hello/helloHandler";
import { mockHandler } from "./mock/mockHandler";

export const handlers = [...helloHandler, ...mockHandler, ...getBooksSearchHandler];
