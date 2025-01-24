import type { BookWithId } from "./book.model";
import type { Memo } from "./memo.model";

export interface BookRecord {
  recordId: string;
  createdAt: string;
  updatedAt: string | null;
  book: BookWithId;
  dedtailUpdatedAt: string | null;
  latestMemoContent: string;
  updatedGauge: number;
}

export interface BookRecordDetail {
  recordId: string;
  createdAt: string;
  updatedAt: string;
  book: BookWithId;
  updatedGauge: number;
  memos: Memo[];
}
