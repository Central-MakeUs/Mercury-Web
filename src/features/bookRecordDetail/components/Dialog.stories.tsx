import * as Dialog from "@radix-ui/react-dialog";
import { CtaButton } from "@repo/design-system/CtaButton";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DialogConfirm } from "./DialogConfirm";
import { DialogMenu } from "./DialogMenu";
import { DialogContainer } from "./dialogContainer";

const meta: Meta = {
  title: "bookRecordDetail/Dialog",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild={true}>
          <CtaButton className="bg-green max-h-[50px]">Dialog Open</CtaButton>
        </Dialog.Trigger>

        <DialogContainer>
          <p className="text-lg text-center font-medium">
            모든 메모가 한 번에 삭제돼요.
            <br />
            정말 삭제할까요?
          </p>
        </DialogContainer>
      </Dialog.Root>
    );
  },
};

export const Confirm: StoryObj = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild={true}>
          <CtaButton className="bg-green max-h-[50px]">Dialog Open</CtaButton>
        </Dialog.Trigger>

        <DialogContainer>
          <DialogConfirm setIsOpen={setIsOpen} />
        </DialogContainer>
      </Dialog.Root>
    );
  },
};

export const Menu: StoryObj = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger asChild={true}>
          <CtaButton className="bg-green max-h-[50px]">Dialog Open</CtaButton>
        </Dialog.Trigger>

        <DialogContainer>
          <DialogMenu />
        </DialogContainer>
      </Dialog.Root>
    );
  },
};
