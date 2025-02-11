import { Button } from "@repo/design-system/Button";
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
import { useGetRecordsDetailQueryOptions } from "~/entities/record/api/getRecordDetail";
import type { Memo } from "~/entities/record/model/memo.model";
import { BookRecordDetailFloatButton } from "~/features/bookRecordDetail/components/BookRecordDetailFloatButton";
import { BookRecordDetailMemoItem } from "~/features/bookRecordDetail/components/BookRecordDetailMemoItem";
import { BookRecordDetailTopSection } from "~/features/bookRecordDetail/components/BookRecordDetailTopSection";
import { memoEditOverlay } from "~/features/bookRecordDetail/components/MemoEditDialog";

export default wrap
  .Suspense()
  .ErrorBoundary({ fallback: <Navigate to="/book-record" /> })
  .on(function BookRecordDetailPage() {
    const { recordId } = useParams();

    const options = useGetRecordsDetailQueryOptions({
      recordId: recordId ?? "",
    });

    const { data: recordDetail } = useSuspenseQuery(options);

    const { book, updatedGauge, memos } = recordDetail;
    const title = book.title;
    const author = book.author;
    const publisher = book.publisher;
    const src = book.coverImageUrl;

    return (
      <>
        <Stack className=" w-full h-full">
          <BookRecordDetailTopSection
            title={title}
            author={author}
            publisher={publisher}
            src={src}
            recordId={recordId ?? ""}
          />

          <Stack className=" pt-[16px]  z-[3] bg-white h-full min-h-screen">
            <Spacing className=" h-[24px]" />

            <List className=" w-full ">
              {memos.map((memo) => (
                <BookRecordDetailMemoItem
                  key={memo.memoId}
                  onPressComplete={async () => {
                    memoEditOverlay.openAsync({
                      recordId: recordId ?? "",
                      memoId: memo.memoId,
                    });
                  }}
                  {...createRowProps(memo)}
                />
              ))}
            </List>
          </Stack>
        </Stack>
        <BookRecordDetailFloatButton className=" z-[5]" recordId={recordId ?? ""} />
      </>
    );
  });

const createRowProps = (props: Pick<Memo, "createdAt" | "content" | "gauge">) => {
  const { createdAt, content, gauge } = props;

  try {
    const header = format(toDate(createdAt), "yyyy.MM.dd");
    return { header, children: content, gauge };
  } catch (_e) {
    return { header: "유효하지 않은 날짜에요", children: content, gauge: 0 };
  }
};

const _allMemoDeleteOverlay = {
  open: () => {
    return overlay.open(({ isOpen, close, unmount }) => {
      return (
        <AllMemoDeleteDialog
          isOpen={isOpen}
          onOpenChange={() => {
            close();
            setTimeout(unmount, 2000);
          }}
        />
      );
    });
  },
};

const AllMemoDeleteDialog = (props: {
  isOpen?: boolean;
  onOpenChange?: (bool: boolean) => void;
}) => {
  const { isOpen, onOpenChange } = props;
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="z-[6]" />
        <Dialog.Content>
          <Dialog.Title className=" sr-only">메모 전체 삭제하기</Dialog.Title>
          <Dialog.Description className=" sr-only">전체 메모가 삭제됩니다.</Dialog.Description>
          <MaxWidthBox className="flex z-[7] justify-center items-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  px-6">
            <Stack className=" bg-white rounded-[14px] pt-10 pb-4 px-4 justify-center items-center">
              <Text className=" whitespace-pre-wrap text-gray-800" variant={"title/20_sb"}>
                {"모든 메모가 한 번에 삭제돼요.\n정말 삭제할까요?"}
              </Text>
              <JustifyBetween className=" w-full mt-9">
                <Button size={"small"} className=" w-full" variant={"gray"}>
                  아니요
                </Button>
                <Button size={"small"} className=" w-full" variant={"warning"}>
                  삭제하기
                </Button>
              </JustifyBetween>
            </Stack>
          </MaxWidthBox>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
