import { Dialog } from "@repo/design-system/Dialog";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { Text } from "@repo/design-system/Text";
import { toast } from "@repo/design-system/Toast";
import { Stack } from "@repo/ui/Stack";
import { useQueryClient } from "@tanstack/react-query";
import { overlay } from "overlay-kit";
import { useNavigate } from "react-router";
import { useDeleteMemoDetail } from "~/entities/record/api/deleteMemoDetail";
import { recordQueryKeys } from "~/entities/record/api/record.querykey";

export const memoEditOverlay = {
  openAsync: async (props: { userId: string; recordId: string; memoId: string }) => {
    return overlay.openAsync<boolean>(({ isOpen, close, unmount }) => {
      return <MemoEditDialog isOpen={isOpen} close={close} unmount={unmount} {...props} />;
    });
  },
};

const MemoEditDialog = (props: {
  isOpen: boolean;
  close: (b: boolean) => void;
  unmount: () => void;
  recordId: string;
  userId: string;
  memoId: string;
}) => {
  const { isOpen, close, unmount, recordId, memoId, userId } = props;
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutateAsync: deleteMemo } = useDeleteMemoDetail();

  const handleModify = () => {
    close(true);
    setTimeout(unmount, 2000);
    navigate(`/book-record/${recordId}/${memoId}/modify`);
  };

  const handleDelete = async () => {
    close(true);
    navigate(`/book-record/${recordId}`);
    await deleteMemo({ memoId, recordId, userId });
    await queryClient.invalidateQueries({
      queryKey: recordQueryKeys.getRecordById({ recordId }),
      refetchType: "all",
    });
    await queryClient.invalidateQueries({
      queryKey: recordQueryKeys.allGetRecords(),
      refetchType: "all",
    });
    toast.main("메모를 삭제했어요");
  };

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
                onClick={handleModify}
                className=" focus:outline-none h-[40px] px-4 text-left w-full"
              >
                <Text variant={"body/15_m"} className=" text-gray-600">
                  메모 수정하기
                </Text>
              </button>
              <button
                onClick={handleDelete}
                className=" focus:outline-none h-[40px] px-4 text-left w-full"
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
