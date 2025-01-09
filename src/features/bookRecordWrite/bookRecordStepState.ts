import { createFunnelSteps } from "@use-funnel/browser";

export interface BookRecordWriteFormOptionalState {
  text?: string;
  progress?: number;
  book?: unknown;
}

export const bookRecordWriteSteps = createFunnelSteps<BookRecordWriteFormOptionalState>()
  .extends("SearchStep", {
    requiredKeys: [],
  })
  .extends("TextStep", {
    requiredKeys: ["book"],
  })
  .extends("ProgressStep", {
    requiredKeys: ["text", "book"],
  })
  .build();
