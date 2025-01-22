import type { BookWithId } from "./book.model";

export interface Memo {
  memoId: number;
  content: string;
  gauge: number;
  createdAt: string;
  updatedAt: string | null;
  recordId: number;
}

export interface MemoList extends BookWithId {
  recordId: number;
  updatedGauge: number;
  book: BookWithId;
  createdAt: string;
  updatedAt: string;
  memos: Memo[];
}
