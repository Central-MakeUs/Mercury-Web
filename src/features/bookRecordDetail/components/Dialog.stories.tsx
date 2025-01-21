import { Button } from "@repo/design-system/Button";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DialogConfirm } from "./DialogConfirm";
import { DialogContent } from "./DialogContent";
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
      <DialogContent.Root open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent.Trigger asChild={true}>
          <Button className="bg-blue-500 text-white bg-green">삭제 확인</Button>
        </DialogContent.Trigger>

        <DialogContent.Portal>
          <DialogContent.Overlay />
          <DialogConfirm onClose={() => setIsOpen(false)} />
        </DialogContent.Portal>
      </DialogContent.Root>
    );
  },
};

export const MenuDialog: StoryObj = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <DialogContent.Root open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent.Trigger asChild={true}>
          <Button className="bg-green-500 text-white bg-green">메뉴 열기</Button>
        </DialogContent.Trigger>

        <DialogContent.Portal>
          <DialogContent.Overlay />
          <DialogMenu />
        </DialogContent.Portal>
      </DialogContent.Root>
    );
  },
};
