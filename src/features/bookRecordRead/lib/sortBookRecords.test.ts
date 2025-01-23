import type { BookRecord } from "~/entities/record/model/record.model";
import { BOOK_RECORD_SORT_TYPES } from "../model/bookRecord.model";
import { sortBookRecords } from "./sortBookRecords";

describe("sortBookRecords", () => {
  const mockRecords = [
    {
      recordId: "1",
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-02T00:00:00.000Z",
      book: {
        bookId: "book1",
        title: "Book 1",
        author: "Author 1",
        coverImageUrl: "cover1.jpg",
        isbn13: "isbn13-1",
        link: "link-1",
        publisher: "publisher-1",
      },
      dedtailUpdatedAt: null,
      latestMemoContent: "memo 1",
      updatedGauge: 50,
    },
    {
      recordId: "2",
      createdAt: "2024-01-02T00:00:00.000Z",
      updatedAt: null,
      book: {
        bookId: "book2",
        title: "Book 2",
        author: "Author 2",
        publisher: "publisher-2",
        coverImageUrl: "cover2.jpg",
        isbn13: "isbn13-2",
        link: "link-2",
      },
      dedtailUpdatedAt: null,
      latestMemoContent: "memo 2",
      updatedGauge: 30,
    },
    {
      recordId: "3",
      createdAt: "2023-10-31T00:00:00.000Z",
      updatedAt: "2024-01-03T00:00:00.000Z",
      book: {
        bookId: "book3",
        title: "Book 3",
        author: "Author 3",
        coverImageUrl: "cover3.jpg",
        isbn13: "isbn13-3",
        link: "link-3",
        publisher: "publisher-3",
      },
      dedtailUpdatedAt: null,
      latestMemoContent: "memo 3",
      updatedGauge: 100,
    },
  ] satisfies BookRecord[];
  it("생성일순 정렬", () => {
    const sortedRecords = sortBookRecords(mockRecords, BOOK_RECORD_SORT_TYPES.CREATED_AT.value);
    expect(sortedRecords[0].recordId).toBe("3");
    expect(sortedRecords[1].recordId).toBe("1");
    expect(sortedRecords[2].recordId).toBe("2");
  });
  it("업데이트순 정렬", () => {
    const sortedRecords = sortBookRecords(mockRecords, BOOK_RECORD_SORT_TYPES.UPDATED_AT.value);
    expect(sortedRecords[0].recordId).toBe("3");
    expect(sortedRecords[1].recordId).toBe("1");
    expect(sortedRecords[2].recordId).toBe("2");
  });
});
