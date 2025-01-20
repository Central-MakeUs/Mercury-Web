import * as Dialog from "@radix-ui/react-dialog";
import type { ReactNode } from "react";

interface DialogContainerProps {
  children: ReactNode;
}

export const DialogContainer = ({ children }: DialogContainerProps) => {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-gray-1000 bg-opacity-70" />
      <Dialog.Content className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-[20px] max-w-[327px]">
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
};
