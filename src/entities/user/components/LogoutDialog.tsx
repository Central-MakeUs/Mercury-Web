import { Button } from "@repo/design-system/Button";
import { Dialog } from "@repo/design-system/Dialog";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { Text } from "@repo/design-system/Text";
import { JustifyBetween } from "@repo/ui/JustifyBetween";
import { Stack } from "@repo/ui/Stack";
import { overlay } from "overlay-kit";

export const logoutDialogOverlay = {
  open: () => {
    return overlay.open(({ isOpen, close, unmount }) => {
      return (
        <LogoutDialog
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

const LogoutDialog = (props: {
  isOpen?: boolean;
  onOpenChange?: (bool: boolean) => void;
}) => {
  const { isOpen, onOpenChange } = props;
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="z-[6]" />
        <Dialog.Content>
          <Dialog.Title className=" sr-only">로그아웃</Dialog.Title>
          <Dialog.Description className=" sr-only">로그아웃을 합니다.</Dialog.Description>
          <MaxWidthBox className="flex z-[7] justify-center items-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  px-6">
            <Stack className=" bg-white rounded-[14px] pt-10 pb-4 px-4 justify-center items-center">
              <Text className=" whitespace-pre-wrap text-gray-800" variant={"title/20_sb"}>
                정말 로그아웃할까요?
              </Text>
              <JustifyBetween className=" w-full mt-9 gap-2">
                <Button
                  size={"small"}
                  className=" w-full rounded-[14px]"
                  variant={"gray"}
                  onClick={() => onOpenChange?.(false)}
                >
                  아니요
                </Button>
                <Button size={"small"} className=" w-full rounded-[14px]" variant={"warning"}>
                  로그아웃
                </Button>
              </JustifyBetween>
            </Stack>
          </MaxWidthBox>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
