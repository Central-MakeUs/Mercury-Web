import type { BookWithId } from "./book.model";

export interface BookRecord {
  recordId: string;
  createdAt: string;
  updatedAt: string | null;
  book: BookWithId;
  dedtailUpdatedAt: string | null;
  latestMemoContent: string;
  updatedGauge: number;
}
