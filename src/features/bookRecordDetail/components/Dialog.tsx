import * as DialogPrimitves from "@radix-ui/react-dialog";
import { cn } from "@repo/design-system/cn";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

export const Root = DialogPrimitves.Root;
export const Trigger = DialogPrimitves.Trigger;
export const Portal = DialogPrimitves.Portal;

export const Overlay = forwardRef<
  ElementRef<typeof DialogPrimitves.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitves.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitves.Overlay
    ref={ref}
    className={cn("fixed inset-0 bg-gray-1000 bg-opacity-70", className)}
    {...props}
  />
));
Overlay.displayName = "DialogOverlay";

export const Content = forwardRef<
  ElementRef<typeof DialogPrimitves.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitves.Content>
>(({ className, ...props }, ref) => (
  <DialogPrimitves.Content
    ref={ref}
    className={cn(
      "absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-[20px] max-w-[327px]",
      className,
    )}
    {...props}
  />
));
Content.displayName = "Dialog";

export const Title = DialogPrimitves.Title;
export const Description = DialogPrimitves.Description;

export const Dialog = {
  Root,
  Trigger,
  Portal,
  Overlay,
  Content,
  Title,
  Description,
};
