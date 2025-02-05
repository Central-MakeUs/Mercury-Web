import { createFunnelSteps } from "@use-funnel/browser";
import type { Book } from "~/entities/record/model/book.model";

export interface BookRecordWriteFormOptionalState {
  content?: string;
  gauge?: number;
  book?: Book;
}

export const bookRecordWriteSteps = createFunnelSteps<BookRecordWriteFormOptionalState>()
  .extends("SearchStep", {
    requiredKeys: [],
  })
  .extends("TextStep", {
    requiredKeys: ["book"],
  })
  .extends("ProgressStep", {
    requiredKeys: ["content", "book"],
  })
  .build();
