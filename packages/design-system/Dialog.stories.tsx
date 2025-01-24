import { Stack } from "@repo/ui/Stack";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";
import { MaxWidthBox } from "./MaxWidthBox";
const meta: Meta = {
  title: "ds/Dialog",
  tags: ["autodocs"],
};
export default meta;
export const Default: StoryObj = {
  render: () => {
    return (
      <Stack>
        <Dialog.Root>
          <Dialog.Trigger>hello</Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <MaxWidthBox className=" px-[16px] fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
                <Dialog.Title className=" sr-only">hello</Dialog.Title>
                <Dialog.Description className=" sr-only">hello</Dialog.Description>
                <Stack className=" bg-white w-full">hello</Stack>
              </MaxWidthBox>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Stack>
    );
  },
};
