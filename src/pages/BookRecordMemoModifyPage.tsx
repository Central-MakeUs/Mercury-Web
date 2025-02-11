import { SafeArea } from "@repo/bridge-web/SafeArea";
import { TopNavigation } from "@repo/design-system/TopNavigation";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { wrap } from "@suspensive/react";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useLoading } from "@xionwcfm/react";
import { Navigate, useNavigate, useParams } from "react-router";
import { useGetRecordsDetailQueryOptions } from "~/entities/record/api/getRecordDetail";
import { usePatchMemoDetail } from "~/entities/record/api/patchMemoDetail";
import { recordQueryKeys } from "~/entities/record/api/record.querykey";
import BookRecordWriteTextStep from "~/entities/record/components/TextStep/BookRecordWriteTextStep";

export default wrap
  .Suspense()
  .ErrorBoundary({ fallback: <Navigate to={"/book-record"} /> })
  .on(function BookRecordMemoModifyPage() {
    const params = useParams();
    const recordId = params.recordId ?? "";
    const memoId = params.memoId ?? "";
    const { data: records } = useSuspenseQuery(useGetRecordsDetailQueryOptions({ recordId }));
    const queryClient = useQueryClient();
    const { mutateAsync: modifyMemo } = usePatchMemoDetail();
    const [_loading, startLoading] = useLoading();

    const navigate = useNavigate();
    const handleBack = () => {
      navigate(-1);
    };

    const book = records.book;
    const content = records.memos.find((memo) => memo.memoId === memoId)?.content ?? "";

    const handleSuccess = async (content: string) => {
      await startLoading(
        (async () => {
          await modifyMemo({ content, memoId, recordId });
          await queryClient.invalidateQueries({
            queryKey: recordQueryKeys.getRecordById({ recordId }),
            refetchType: "all",
          });
          await queryClient.invalidateQueries({
            queryKey: recordQueryKeys.allGetRecords(),
            refetchType: "all",
          });
        })(),
      );
      navigate(`/book-record/${recordId}`);
    };

    return (
      <SafeArea
        edges={["top", "left", "right", "bottom"]}
        className=" flex flex-col w-full h-full min-h-screen"
      >
        <TopNavigation.Root left={<TopNavigation.Back onClick={handleBack} />}>
          <TopNavigation.Title>메모 작성</TopNavigation.Title>
        </TopNavigation.Root>
        <Spacing className="h-[10px]" />
        <Stack className=" h-screen">
          <BookRecordWriteTextStep
            book={book}
            content={content}
            onNext={(content) => {
              handleSuccess(content);
            }}
          />
        </Stack>
      </SafeArea>
    );
  });
