import { Dialog } from "@repo/design-system/Dialog";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { Text } from "@repo/design-system/Text";
import { Stack } from "@repo/ui/Stack";
import { overlay } from "overlay-kit";

export const memoEditOverlay = {
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
