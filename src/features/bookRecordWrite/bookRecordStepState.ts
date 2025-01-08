import { createFunnelSteps } from "@use-funnel/browser";

export interface BookRecordWriteFormOptionalState {
  text?: string;
  gage?: number;
  book?: unknown;
}

export const bookRecordWriteSteps = createFunnelSteps<BookRecordWriteFormOptionalState>()
  .extends("SearchStep", {
    requiredKeys: [],
  })
  .extends("TextStep", {
    requiredKeys: ["book"],
  })
  .extends("GageStep", {
    requiredKeys: ["text", "book"],
  })
  .build();
