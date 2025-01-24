export interface Memo {
  memoId: number;
  content: string;
  gauge: number;
  createdAt: string;
  updatedAt: string | null;
  recordId: number;
}

export interface MemoList {
  recordId: string;
  updatedGauge: number;
  book: {
    title: string;
    coverImageUrl: string;
    author: string;
    isbn13: string;
    link: string;
    publisher?: string;
    bookId: number;
  };
  createdAt: string;
  updatedAt: string | null;
  memos: Memo[];
}
