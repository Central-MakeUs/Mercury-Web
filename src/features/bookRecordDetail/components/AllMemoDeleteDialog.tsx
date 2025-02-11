import { Dialog } from "@repo/design-system/Dialog";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { Text, textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { JustifyBetween } from "@repo/ui/JustifyBetween";
import { Stack } from "@repo/ui/Stack";
import { useQueryClient } from "@tanstack/react-query";
import { overlay } from "overlay-kit";
import { type DeleteRecordsRequest, useDeleteRecords } from "~/entities/record/api/deleteRecords";
import { recordQueryKeys } from "~/entities/record/api/record.querykey";

export const allMemoDeleteOverlay = {
  open: (props: DeleteRecordsRequest & { onSuccess?: () => void; onError?: () => void }) => {
    return overlay.open(({ isOpen, close, unmount }) => {
      return (
        <AllMemoDeleteDialog
          {...props}
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

const AllMemoDeleteDialog = (
  props: {
    isOpen?: boolean;
    onOpenChange?: (bool: boolean) => void;
    onSuccess?: () => void;
    onError?: () => void;
  } & DeleteRecordsRequest,
) => {
  const { isOpen, onOpenChange, recordId, onSuccess, onError } = props;
  const { mutateAsync: allMemoDelete, isPending } = useDeleteRecords();
  const queryClient = useQueryClient();

  const handleAllDeleteClick = async () => {
    try {
      await allMemoDelete({ recordId });
      await queryClient.invalidateQueries({ queryKey: recordQueryKeys.all(), refetchType: "all" });
      onOpenChange?.(false);
      onSuccess?.();
    } catch (_e) {
      onError?.();
      onOpenChange?.(false);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="z-[6]" />
        <Dialog.Content>
          <Dialog.Title className=" sr-only">메모 전체 삭제하기</Dialog.Title>
          <Dialog.Description className=" sr-only">전체 메모가 삭제됩니다.</Dialog.Description>
          <MaxWidthBox className="flex z-[7] justify-center items-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  px-6">
            <Stack className=" w-full bg-white rounded-[14px] pt-10 pb-4 px-4 justify-center items-center">
              <Text
                className=" whitespace-pre-wrap text-center text-gray-800"
                variant={"title/20_sb"}
              >
                {"모든 메모가 한 번에 삭제돼요.\n정말 삭제할까요?"}
              </Text>
              <JustifyBetween className=" w-full mt-9 gap-x-2">
                <Dialog.Close asChild={true}>
                  <button
                    className={cn(
                      " w-full bg-gray-200 text-gray-400 py-[18px] rounded-[14px]",
                      textVariants({ variant: "body/16_sb" }),
                    )}
                  >
                    아니요
                  </button>
                </Dialog.Close>

                <button
                  className={cn(
                    " w-full bg-warning-red text-white py-[18px] rounded-[14px]",
                    textVariants({ variant: "body/16_sb" }),
                    isPending && " opacity-50 animate-pulse",
                  )}
                  disabled={isPending}
                  onClick={handleAllDeleteClick}
                >
                  삭제하기
                </button>
              </JustifyBetween>
            </Stack>
          </MaxWidthBox>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
