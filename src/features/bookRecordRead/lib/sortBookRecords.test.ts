import type { BookRecord } from "~/entities/record/model/record.model";
import { BOOK_RECORD_SORT_OPTIONS } from "../model/bookRecord.model";
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
      createdAt: "2023-12-31T00:00:00.000Z",
      updatedAt: "2024-01-03T00:00:00.000Z",
      book: {
        bookId: "book3",
        title: "Book 3",
        author: "Author 3",
        coverImageUrl: "cover3.jpg",
        isbn13: "isbn13-3",
        link: "link-3",
      },
      dedtailUpdatedAt: null,
      latestMemoContent: "memo 3",
      updatedGauge: 100,
    },
  ] satisfies BookRecord[];

  it("createdAt 기준으로 정렬합니다", () => {
    const sorted = sortBookRecords(mockRecords, BOOK_RECORD_SORT_OPTIONS.CREATED_AT.value);

    expect(sorted.map((record) => record.recordId)).toEqual(["3", "1", "2"]);
  });

  it("updatedAt 기준으로 정렬하며, updatedAt이 없는 경우는 앞으로 정렬됩니다", () => {
    const sorted = sortBookRecords(mockRecords, BOOK_RECORD_SORT_OPTIONS.UPDATED_AT.value);

    expect(sorted.map((record) => record.recordId)).toEqual(["1", "2", "3"]);
  });

  it("원본 배열을 변경하지 않습니다", () => {
    const original = [...mockRecords];
    sortBookRecords(mockRecords, BOOK_RECORD_SORT_OPTIONS.CREATED_AT.value);

    expect(mockRecords).toEqual(original);
  });

  it("updatedAt이 모두 null인 경우 원래 순서를 유지합니다", () => {
    const recordsWithNullUpdatedAt = [
      {
        recordId: "1",
        createdAt: "2024-01-01T00:00:00.000Z",
        updatedAt: null,
        book: {
          bookId: "book1",
          title: "Book 1",
          author: "Author 1",
          coverImageUrl: "cover1.jpg",
          isbn13: "isbn13-1",
          link: "link-1",
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
          coverImageUrl: "cover2.jpg",
          isbn13: "isbn13-2",
          link: "link-2",
        },
        dedtailUpdatedAt: null,
        latestMemoContent: "memo 2",
        updatedGauge: 30,
      },
    ] satisfies BookRecord[];

    const sorted = sortBookRecords(
      recordsWithNullUpdatedAt,
      BOOK_RECORD_SORT_OPTIONS.UPDATED_AT.value,
    );
    expect(sorted).toEqual(recordsWithNullUpdatedAt);
  });
});
