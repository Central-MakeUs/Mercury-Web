import { getBooksSearchHandler } from "./booksSearch/getbooksSearchHandler";
import { mockHandler } from "./mock/mockHandler";

export const handlers = [...mockHandler, ...getBooksSearchHandler];
