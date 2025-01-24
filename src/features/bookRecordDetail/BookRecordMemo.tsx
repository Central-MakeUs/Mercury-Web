import { FloatingActionButton } from "@repo/design-system/FloatingActionButton";
import { Image } from "@repo/design-system/Image";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { Text } from "@repo/design-system/Text";
import { Flex } from "@repo/ui/Flex";
import { Stack } from "@repo/ui/Stack";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { deleteMemos } from "~/entities/record/api/deleteBookMemo";
import { InteractiveBookRecordTopNavigationBar } from "./InteractiveBookRecordTopNavigationBar";
import { Dialog } from "./components/Dialog";
import { DialogConfirm } from "./components/DialogConfirm";
import { RecordedBookMemo } from "./components/RecordedBookMemo";

export interface Memo {
  memoId: number;
  content: string;
  updatedAt: string;
}

interface BookRecordMemoProps {
  author: string;
  publisher: string;
  title: string;
  gauge: number;
  cheeringMessage: string;
  coverImageUrl: string;
  memos: Memo[];
}

export const BookRecordMemo = ({
  author,
  publisher,
  title,
  gauge,
  cheeringMessage,
  memos,
  coverImageUrl,
}: BookRecordMemoProps) => {
  const navigate = useNavigate();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const userId = localStorage.getItem("@mercury_test_user_id_W") || "2";
  const { recordId } = useParams<{ recordId: string }>();
  const queryClient = useQueryClient();

  const { mutate: deleteMemo } = useMutation({
    mutationFn: () => deleteMemos({ userId, recordId: recordId as string }),
    onSuccess: () => {
      alert("메모 삭제 완료!");
      queryClient.invalidateQueries({ queryKey: ["getMemos", userId, recordId] });
    },
    onError: (error) => {
      alert(`삭제 실패: ${error.message}`);
    },
  });

  const HandleDeleteAllMemo = () => {
    setIsDeleteDialogOpen(false);
    deleteMemo();
    navigate("/book-record");
  };

  return (
    <Stack className="relative">
      <Stack className="max-h-[287px]">
        <InteractiveBookRecordTopNavigationBar
          title={title}
          onBack={() => navigate(-1)}
          onMemoDelete={() => setIsDeleteDialogOpen(true)}
        />

        <MaxWidthBox className=" w-screen h-screen relative">
          <Image
            src={coverImageUrl}
            alt="aladin"
            className=" w-full max-h-[287px]"
            objectfit={"cover"}
          />

          <Dialog.Root open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
            <Dialog.Portal>
              <Dialog.Overlay />
              <DialogConfirm
                onClose={() => setIsDeleteDialogOpen(false)}
                onDelete={HandleDeleteAllMemo}
              />
            </Dialog.Portal>
          </Dialog.Root>

          <Stack className="bg-gray-1000 bg-opacity-70 px-4 absolute bottom-0 left-0 pt-[138px] pb-[15px]">
            <Flex className="gap-[5px]">
              <Text className="text-gray-300" variant={"body/15_m"}>
                저자
              </Text>
              <Text className="text-gray-200" variant={"body/15_m"}>
                {author}
              </Text>
            </Flex>

            <Flex className="gap-[5px] mt-1 mb-[10px]">
              <Text className="text-gray-300" variant={"body/15_m"}>
                출판사
              </Text>
              <Text className="text-gray-200" variant={"body/15_m"}>
                {publisher}
              </Text>
            </Flex>

            <Text className="text-white" variant={"title/25_b"}>
              {title}
            </Text>
          </Stack>
        </MaxWidthBox>

        <Stack className=" h-screen "></Stack>
      </Stack>

      <Stack className="px-4 py-[17px]">
        <Flex className="justify-between">
          <Text className="text-gray-600" variant={"body/16_sb"}>
            {gauge}%까지 읽었어요!
          </Text>
          <Text className="text-pastel-violet" variant={"body/16_m"}>
            {cheeringMessage}
          </Text>
        </Flex>

        <Stack className="mt-[14px] gap-[17px]">
          {memos.map(({ memoId, content, updatedAt }) => (
            <RecordedBookMemo
              key={memoId}
              updateAt={updatedAt}
              contents={content}
              memoId={memoId}
            />
          ))}
        </Stack>
      </Stack>
      <Link to={"/book-record/write"} className="fixed bottom-[80px] right-4">
        <FloatingActionButton />
      </Link>
    </Stack>
  );
};
