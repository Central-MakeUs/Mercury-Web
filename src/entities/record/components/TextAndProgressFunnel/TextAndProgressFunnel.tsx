import { createFunnelSteps, useFunnel } from "@use-funnel/browser";
import type { Book } from "../../model/book.model";
import BookRecordWriteProgressStep from "../ProgressStep/BookRecordWriteProgressStep";
import BookRecordWriteTextStep from "../TextStep/BookRecordWriteTextStep";

export interface TextAndProgressFunnelState {
  content?: string;
  gauge?: number;
}

export const textAndProgressFunnel = createFunnelSteps<TextAndProgressFunnelState>()
  .extends("TextStep", {
    requiredKeys: [],
  })
  .extends("ProgressStep", {
    requiredKeys: ["content"],
  })
  .build();

export const TextAndProgressFunnel = (props: {
  isLoading?: boolean;
  onSuccess?: (data: Required<TextAndProgressFunnelState>) => void;
  content?: string;
  book: Book;
  gauge?: number;
  step?: keyof typeof textAndProgressFunnel;
}) => {
  const { isLoading, book, onSuccess, content, gauge, step } = props;

  const funnel = useFunnel({
    id: "@textandprogress",
    initial: {
      context: {
        gauge: gauge ?? 0,
        content: content ?? "",
      } satisfies TextAndProgressFunnelState,
      step: step ?? "TextStep",
    } as const,
    steps: textAndProgressFunnel,
  });

  return (
    <funnel.Render
      TextStep={({ history }) => (
        <BookRecordWriteTextStep
          book={book}
          onNext={(content) => history.push("ProgressStep", { content })}
        />
      )}
      ProgressStep={({ context }) => (
        <BookRecordWriteProgressStep
          gauge={gauge}
          loading={isLoading}
          onNext={(gauge) => onSuccess?.({ ...context, gauge })}
        />
      )}
    />
  );
};
