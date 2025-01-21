import { Button } from "@repo/design-system/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Dialog } from "./Dialog";
import { DialogConfirm } from "./DialogConfirm";
import { DialogMenu } from "./DialogMenu";

const meta: Meta = {
  title: "bookRecordDetail/Dialog",
  tags: ["autodocs"],
};
export default meta;

export const ConfirmDialog: StoryObj = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild={true}>
          <Button className="bg-blue-500 text-white bg-green">삭제 확인</Button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay />
          <DialogConfirm onClose={() => setIsOpen(false)} />
        </Dialog.Portal>
      </Dialog.Root>
    );
  },
};

export const MenuDialog: StoryObj = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild={true}>
          <Button className="bg-green-500 text-white bg-green">메뉴 열기</Button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay />
          <DialogMenu />
        </Dialog.Portal>
      </Dialog.Root>
    );
  },
};
