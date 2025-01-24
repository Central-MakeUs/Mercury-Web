import * as DialogPrimitives from "@radix-ui/react-dialog";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import { cn } from "./cn";

const Root = DialogPrimitives.Root;
const Trigger = DialogPrimitives.Trigger;
const Portal = DialogPrimitives.Portal;

const Overlay = forwardRef<
  ElementRef<typeof DialogPrimitives.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitives.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitives.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 data-[state=open]:animate-fade-in-200 data-[state=closed]:animate-fade-out-200 bg-[rgba(0,0,0,0.7)]",
      className,
    )}
    {...props}
  />
));
Overlay.displayName = "DialogOverlay";

const Content = DialogPrimitives.Content;
const Title = DialogPrimitives.Title;
const Description = DialogPrimitives.Description;
const Close = DialogPrimitives.Close;
export const Dialog = { Root, Trigger, Portal, Overlay, Content, Title, Description, Close };
