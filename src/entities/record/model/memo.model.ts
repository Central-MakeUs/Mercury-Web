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
  book: {
    title: string; // 제목
    coverImageUrl: string; // 커버이미지
    author: string; // 저자 (이미예 지음)
    isbn13: string; // 도서문헌정보
    link: string; // 구매링크
    publisher?: string; // 출판사};
    bookId: number;
  };
  createdAt: string;
  updatedAt: string;
  memos: Memo[];
}
