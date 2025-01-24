import { Dialog } from "@repo/design-system/Dialog";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { Text } from "@repo/design-system/Text";
import { JustifyBetween } from "@repo/ui/JustifyBetween";
import { List } from "@repo/ui/List";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { wrap } from "@suspensive/react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { format, toDate } from "date-fns";
import { overlay } from "overlay-kit";
import { Navigate, useParams } from "react-router";
import { getRecordsDetailQueryOptions } from "~/entities/record/api/getRecordDetail";
import type { Memo } from "~/entities/record/model/memo.model";
import { getGaugeMessage } from "~/entities/record/model/record.constants";
import { useTestUserQueryOptions } from "~/entities/user/api/getTestUser";
import { BookRecordDetailFloatButton } from "~/features/bookRecordDetail/components/BookRecordDetailFloatButton";
import { BookRecordDetailMemoItem } from "~/features/bookRecordDetail/components/BookRecordDetailMemoItem";
import { TopSection } from "~/features/bookRecordDetail/components/BookRecordDetailTopSection";

export default wrap
  .Suspense()
  .ErrorBoundary({ fallback: <Navigate to="/" /> })
  .on(function BookRecordDetailPage() {
    const { recordId } = useParams();
    const { data: user } = useSuspenseQuery(useTestUserQueryOptions());

    const options = getRecordsDetailQueryOptions({ userId: user.userId, recordId: recordId ?? "" });
    const { data: recordDetail } = useSuspenseQuery(options);

    const { book, updatedGauge, memos } = recordDetail;
    const title = book.title;
    const author = book.author;
    const publisher = book.publisher;
    const src = book.coverImageUrl;
    const gauge = updatedGauge;
    const gaugeMessage = `${gauge}%까지 읽었어요!`;
    const cheeringMessage = getGaugeMessage(gauge);

    return (
      <>
        <Stack className=" w-full h-full">
          <TopSection title={title} author={author} publisher={publisher} src={src} />

          <Stack className=" pt-[16px] px-[16px] z-[3] bg-white h-full min-h-screen">
            <JustifyBetween>
              <Text variant={"body/16_m"} className=" text-gray-600">
                {gaugeMessage}
              </Text>
              <Text variant={"body/16_m"} className=" text-pastel-violet">
                {cheeringMessage}
              </Text>
            </JustifyBetween>
            <Spacing className=" h-[16px]" />
            <List className=" w-full   gap-y-4 ">
              {memos.map((memo) => (
                <BookRecordDetailMemoItem
                  key={memo.memoId}
                  onPressComplete={async () => {
                    const _result = await memoEditOverlay.openAsync();
                  }}
                  {...createRowProps(memo)}
                />
              ))}
            </List>
          </Stack>
        </Stack>
        <BookRecordDetailFloatButton className=" z-[5]" />
      </>
    );
  });

const createRowProps = (props: Pick<Memo, "createdAt" | "content">) => {
  const { createdAt, content } = props;

  try {
    const header = format(toDate(createdAt), "yyyy.MM.dd");
    return { header, children: content };
  } catch (_e) {
    return { header: "유효하지 않은 날짜에요", children: content };
  }
};

const memoEditOverlay = {
  openAsync: async () => {
    return overlay.openAsync<boolean>(({ isOpen, close, unmount }) => {
      return <MemoEditDialog isOpen={isOpen} close={close} unmount={unmount} />;
    });
  },
};

const MemoEditDialog = (props: {
  isOpen: boolean;
  close: (b: boolean) => void;
  unmount: () => void;
}) => {
  const { isOpen, close, unmount } = props;
  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={() => {
        close(false);
        setTimeout(unmount, 2000);
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="z-[6]" />
        <Dialog.Content>
          <Dialog.Title className=" sr-only">메모 수정혹은 삭제하기</Dialog.Title>
          <Dialog.Description className=" sr-only">
            메모를 수정하거나 삭제할 수 있습니다.
          </Dialog.Description>
          <MaxWidthBox className="flex z-[7] justify-center items-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <Stack className=" w-[225px] py-1 bg-white rounded-[14px]">
              <button
                className=" focus:outline-none h-[40px] px-4 text-left w-full"
                onClick={() => {
                  close(true);
                  setTimeout(unmount, 2000);
                }}
              >
                <Text variant={"body/15_m"} className=" text-gray-600">
                  메모 수정하기
                </Text>
              </button>
              <button
                className=" focus:outline-none h-[40px] px-4 text-left w-full"
                onClick={() => {
                  close(false);
                  setTimeout(unmount, 2000);
                }}
              >
                <Text variant={"body/15_m"} className=" text-gray-600">
                  메모 삭제하기
                </Text>
              </button>
            </Stack>
          </MaxWidthBox>
          <MaxWidthBox></MaxWidthBox>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
