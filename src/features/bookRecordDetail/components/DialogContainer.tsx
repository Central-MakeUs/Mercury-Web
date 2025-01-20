import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "@repo/design-system/cn";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

export const Root = Dialog.Root;
export const Trigger = Dialog.Trigger;
export const Portal = Dialog.Portal;

export const Overlay = forwardRef<
  ElementRef<typeof Dialog.Overlay>,
  ComponentPropsWithoutRef<typeof Dialog.Overlay>
>(({ className, ...props }, ref) => (
  <Dialog.Overlay
    ref={ref}
    className={cn("fixed inset-0 bg-gray-1000 bg-opacity-70", className)}
    {...props}
  />
));
Overlay.displayName = "DialogOverlay";

export const Content = forwardRef<
  ElementRef<typeof Dialog.Content>,
  ComponentPropsWithoutRef<typeof Dialog.Content>
>(({ className, ...props }, ref) => (
  <Dialog.Content
    ref={ref}
    className={cn(
      "absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-[20px] max-w-[327px]",
      className,
    )}
    {...props}
  />
));
Content.displayName = "DialogContent";

export const Title = Dialog.Title;
export const Description = Dialog.Description;

export const DialogContainer = {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
};
