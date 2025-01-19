import { mockGetBooksSearchHandler } from "./booksSearch/mockGetbooksSearchHandler";
import { mockHandler } from "./mock/mockHandler";

export const handlers = [...mockHandler, ...mockGetBooksSearchHandler];
