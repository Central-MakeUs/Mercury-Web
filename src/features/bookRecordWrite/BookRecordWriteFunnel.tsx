import { TopNavigation } from "@repo/design-system/TopNavigation";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useFunnel } from "@use-funnel/browser";
import { useNavigate } from "react-router";
import { usePostRecords } from "~/entities/record/api/postRecords";
import { useTestUserQueryOptions } from "~/entities/user/api/getTestUser";
import BookRecordWriteProgressStep from "./BookRecordWriteProgressStep";
import BookRecordWriteSearchStep from "./BookRecordWriteSearchStep";
import BookRecordWriteTextStep from "./BookRecordWriteTextStep";
import { type BookRecordWriteFormOptionalState, bookRecordWriteSteps } from "./bookRecordStepState";

const options = {
  id: "@bookrecordwrite",
  initial: {
    context: {
      book: undefined,
      gauge: 0,
      content: "",
    } satisfies BookRecordWriteFormOptionalState,
    step: "SearchStep",
  } as const,
  steps: bookRecordWriteSteps,
};

export const BookRecordWriteFunnel = () => {
  const funnel = useFunnel(options);
  const navigate = useNavigate();
  const { mutateAsync: createRecords } = usePostRecords();
  const { data: user } = useSuspenseQuery(useTestUserQueryOptions());

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
            book={context.book}
            onNext={(content) => history.push("ProgressStep", { content, book: context.book })}
          />
        )}
        ProgressStep={({ context }) => (
          <BookRecordWriteProgressStep
            onNext={async (gauge) => {
              const body = { ...context, gauge, userId: user.userId };
              await createRecords(body);
              navigate("/book-record");
            }}
          />
        )}
      />
    </Stack>
  );
};
