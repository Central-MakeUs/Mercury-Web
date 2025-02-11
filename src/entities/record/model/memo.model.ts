import type { BookWithId } from "./book.model";

export interface Memo {
  memoId: string;
  content: string;
  gauge: number;
  createdAt: string;
  updatedAt: string | null;
  recordId: string;
}

export interface MemoList {
  recordId: string;
  updatedGauge: number;
  book: BookWithId;
  createdAt: string;
  updatedAt: string | null;
  memos: Memo[];
}
