import { Button } from "@repo/design-system/Button";
import { textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { Flex } from "@repo/ui/Flex";
import { Stack } from "@repo/ui/Stack";
import { Dialog } from "./Dialog";

interface DialogConfirmProps {
  onClose: () => void;
  onDelete?: () => void;
}

export const DialogConfirm = ({ onClose, onDelete }: DialogConfirmProps) => {
  return (
    <Dialog.Content>
      <Stack className="p-4 gap-[35px]">
        <Dialog.Title
          className={cn(
            "DialogTitle text-center mt-[25px] text-gray-800",
            textVariants({ variant: "title/20_sb" }),
          )}
        >
          모든 메모가 한 번에 삭제돼요
          <br /> 정말 삭제할까요?
        </Dialog.Title>

        <Flex className="justify-between">
          <Button
            onClick={onClose}
            className="rounded-[14px] bg-gray-200 text-gray-400 max-w-[56px] flex items-center justify-center"
          >
            아니요
          </Button>
          <Button
            onClick={onDelete}
            className="rounded-[14px] bg-warning-red text-white max-w-[56px] flex items-center justify-center"
          >
            삭제하기
          </Button>
        </Flex>
      </Stack>
    </Dialog.Content>
  );
};
