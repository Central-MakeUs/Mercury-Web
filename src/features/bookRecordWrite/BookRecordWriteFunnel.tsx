import { toast } from "@repo/design-system/Toast";
import { TopNavigation } from "@repo/design-system/TopNavigation";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useFunnel } from "@use-funnel/browser";
import { useLoading } from "@xionwcfm/react";
import { useNavigate } from "react-router";
import { GET_BOOKS_SEARCH_SORT_TYPE } from "~/entities/record/api/getBooksSearch";
import { type PostRecordsRequest, usePostRecords } from "~/entities/record/api/postRecords";
import { useTestUserQueryOptions } from "~/entities/user/api/getTestUser";
import { type BookRecordWriteFormOptionalState, bookRecordWriteSteps } from "./bookRecordStepState";
import BookRecordWriteProgressStep from "./components/ProgressStep/BookRecordWriteProgressStep";
import BookRecordWriteSearchStep from "./components/SearchStep/BookRecordWriteSearchStep";
import { WriteSearchProvider } from "./components/SearchStep/WriteSearchStep.store";
import BookRecordWriteTextStep from "./components/TextStep/BookRecordWriteTextStep";

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
  const userId = user.userId;
  const [loading, startLoading] = useLoading();

  const handleBack = () => {
    navigate(-1);
  };

  const handleNext = async (body: PostRecordsRequest) => {
    try {
      await startLoading(createRecords(body));
      navigate("/book-record");
    } catch (_e) {
      toast.main3("죄송해요 서버가 맛이 갔나봐요 ㅜㅅㅜ", { duration: 3500 });
    }
  };

  return (
    <Stack className=" w-full">
      <TopNavigation.Root left={<TopNavigation.Back onClick={handleBack} />}>
        <TopNavigation.Title>독서기록</TopNavigation.Title>
      </TopNavigation.Root>
      <Spacing className="h-[10px]" />

      <WriteSearchProvider
        maxResults={100}
        startPage={1}
        sortType={GET_BOOKS_SEARCH_SORT_TYPE.SALES_POINT.value}
      >
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
              loading={loading}
              onNext={(gauge) => handleNext({ ...context, gauge, userId })}
            />
          )}
        />
      </WriteSearchProvider>
    </Stack>
  );
};
