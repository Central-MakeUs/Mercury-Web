import type { BookRecord } from "~/entities/record/model/record.model";
import { hangulIncludes } from "~/shared/utils/hangulIncludes";

export const searchBookRecords = <T extends Pick<BookRecord, "book">>(
  records: T[],
  search: string,
) => {
  return records.filter((record) => {
    return hangulIncludes(record.book.title, search);
  });
};
