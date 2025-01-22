export interface Book {
  title: string; // 제목
  coverImageUrl: string; // 커버이미지
  author: string; // 저자 (이미예 지음)
  isbn13: string; // 도서문헌정보
  link: string; // 구매링크
  publisher?: string; // 출판사
}

export interface BookWithId extends Book {
  bookId: string;
  // createdAt: string; //datetime
  // updatedAt: string | null;
}
