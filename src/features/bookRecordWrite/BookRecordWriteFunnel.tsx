import { TopNavigation } from "@repo/design-system/TopNavigation";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { useFunnel } from "@use-funnel/browser";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <Stack className=" w-full">
      <TopNavigation.Root left={<TopNavigation.Back onClick={handleBack} />}>
        <TopNavigation.Title>독서기록</TopNavigation.Title>
      </TopNavigation.Root>
      <Spacing className="h-[10px]" />

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
              navigate("/book-record");
            }}
          />
        )}
      />
    </Stack>
  );
};
