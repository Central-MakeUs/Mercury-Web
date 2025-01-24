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
  book: {
    title: string;
    coverImageUrl: string;
    author: string;
    isbn13: string;
    link: string;
    publisher?: string;
    bookId: string;
  };
  createdAt: string;
  updatedAt: string | null;
  memos: Memo[];
}
