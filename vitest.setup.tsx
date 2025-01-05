import { cleanup } from "@testing-library/react";
import { vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/vitest";
import { server } from "@repo/mocks/server";

createFetchMock(vi).enableMocks();

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  server.resetHandlers();
});
beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  vi.clearAllMocks();
  cleanup();
});
