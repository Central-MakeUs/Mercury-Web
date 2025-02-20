import { SafeArea } from "@repo/bridge-web/SafeArea";
import { TopNavigation } from "@repo/design-system/TopNavigation";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { wrap } from "@suspensive/react";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useLoading } from "@xionwcfm/react";
import { Navigate, useNavigate, useParams } from "react-router";
import { useGetRecordsDetailQueryOptions } from "~/entities/record/api/getRecordDetail";
import { usePostMemo } from "~/entities/record/api/postMemo";
import { recordQueryKeys } from "~/entities/record/api/record.querykey";
import {
  TextAndProgressFunnel,
  type TextAndProgressFunnelState,
} from "~/entities/record/components/TextAndProgressFunnel/TextAndProgressFunnel";

export default wrap
  .Suspense()
  .ErrorBoundary({ fallback: <Navigate to={"/book-record"} /> })
  .on(function BookRecordMemoAddPage() {
    const params = useParams();
    const recordId = params.recordId ?? "";

    const { data: records } = useSuspenseQuery(useGetRecordsDetailQueryOptions({ recordId }));
    const queryClient = useQueryClient();
    const { mutateAsync: postMemo } = usePostMemo();
    const [_loading, startLoading] = useLoading();

    const navigate = useNavigate();
    const handleBack = () => {
      navigate(-1);
    };

    const book = records.book;
    const gauge = records.updatedGauge;

    const handleSuccess = async (props: Required<TextAndProgressFunnelState>) => {
      const { content, gauge } = props;
      await startLoading(
        (async () => {
          const deviceTime = new Date().toISOString();
          await postMemo({ content, gauge, recordId, deviceTime });
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
      <SafeArea className=" w-full h-full" edges={["top", "bottom", "right", "left"]}>
        <Stack className=" w-full h-full min-h-screen">
          <TopNavigation.Root left={<TopNavigation.Back onClick={handleBack} />}>
            <TopNavigation.Title>메모 작성</TopNavigation.Title>
          </TopNavigation.Root>
          <Spacing className="h-[10px]" />
          <Stack className=" h-screen">
            <TextAndProgressFunnel book={book} gauge={gauge} onSuccess={handleSuccess} />
          </Stack>
        </Stack>
      </SafeArea>
    );
  });
