import { Stack } from "@repo/ui/Stack";
import { useFunnel } from "@use-funnel/browser";
import BookRecordWriteProgressStep from "./BookRecordWriteProgressStep";
import BookRecordWriteSearchStep from "./BookRecordWriteSearchStep";
import BookRecordWriteTextStep from "./BookRecordWriteTextStep";
import { type BookRecordWriteFormOptionalState, bookRecordWriteSteps } from "./bookRecordStepState";

const options = {
  id: "@bookrecordwrite",
  initial: {
    context: { book: null, progress: 0, text: "" } satisfies BookRecordWriteFormOptionalState,
    step: "SearchStep",
  } as const,
  steps: bookRecordWriteSteps,
};

export const BookRecordWriteFunnel = () => {
  const funnel = useFunnel(options);
  return (
    <Stack>
      <funnel.Render
        SearchStep={({ history }) => (
          <BookRecordWriteSearchStep onNext={(book) => history.push("TextStep", { book })} />
        )}
        TextStep={({ context, history }) => (
          <BookRecordWriteTextStep
            onNext={(text) => history.push("ProgressStep", { text, book: context.book })}
          />
        )}
        ProgressStep={({ context }) => (
          <BookRecordWriteProgressStep
            onNext={(progress) => {
              const _result = { ...context, progress };
            }}
          />
        )}
      />
    </Stack>
  );
};
