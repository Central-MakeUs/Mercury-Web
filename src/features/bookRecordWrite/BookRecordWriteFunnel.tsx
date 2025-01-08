import { Stack } from "@repo/ui/Stack";
import { useFunnel } from "@use-funnel/browser";
import BookRecordWriteGageStep from "./BookRecordWriteGageStep";
import BookRecordWriteSearchStep from "./BookRecordWriteSearchStep";
import BookRecordWriteTextStep from "./BookRecordWriteTextStep";
import { bookRecordWriteSteps } from "./bookRecordStepState";

const options = {
  id: "@bookrecordwrite",
  initial: {
    context: { book: null, gage: 0, text: "" },
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
            onNext={(text) => history.push("GageStep", { text, book: context.book })}
          />
        )}
        GageStep={({ context }) => (
          <BookRecordWriteGageStep
            onNext={(gage) => {
              const _result = { ...context, gage };
            }}
          />
        )}
      />
    </Stack>
  );
};
