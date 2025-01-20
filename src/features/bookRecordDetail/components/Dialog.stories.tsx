import { Button } from "@repo/design-system/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DialogConfirm } from "./DialogConfirm";
import { DialogContainer } from "./DialogContainer";
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
      <DialogContainer.Root open={isOpen} onOpenChange={setIsOpen}>
        <DialogContainer.Trigger asChild={true}>
          <Button className="bg-blue-500 text-white bg-green">삭제 확인</Button>
        </DialogContainer.Trigger>

        <DialogContainer.Portal>
          <DialogContainer.Overlay />
          <DialogConfirm onClose={() => setIsOpen(false)} />
        </DialogContainer.Portal>
      </DialogContainer.Root>
    );
  },
};

export const MenuDialog: StoryObj = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <DialogContainer.Root open={isOpen} onOpenChange={setIsOpen}>
        <DialogContainer.Trigger asChild={true}>
          <Button className="bg-green-500 text-white bg-green">메뉴 열기</Button>
        </DialogContainer.Trigger>

        <DialogContainer.Portal>
          <DialogContainer.Overlay />
          <DialogMenu />
        </DialogContainer.Portal>
      </DialogContainer.Root>
    );
  },
};
