import { type ComponentPropsWithoutRef, useMemo } from "react";
import type { ElementRef } from "react";
import { forwardRef } from "react";
import { Drawer } from "vaul";
import { MaxWidthBox } from "./MaxWidthBox";
import { useMaxWidth } from "./MobileLayout";
import { cn } from "./cn";

export const Root = Drawer.Root;

export const Trigger = Drawer.Trigger;

export const Close = Drawer.Close;

export const Portal = Drawer.Portal;

export const Overlay = forwardRef<
  ElementRef<typeof Drawer.Overlay>,
  ComponentPropsWithoutRef<typeof Drawer.Overlay>
>(({ className, style, ...props }, ref) => (
  <Drawer.Overlay
    ref={ref}
    className={cn(` bg-[rgba(0,0,0,0.7)] fixed inset-0`, className)}
    {...props}
  />
));
Overlay.displayName = "BottomSheetOverlay";

export const Title = Drawer.Title;
export const Description = Drawer.Description;

export const Handle = Drawer.Handle;

export const Content = forwardRef<
  ElementRef<typeof Drawer.Content>,
  ComponentPropsWithoutRef<typeof Drawer.Content>
>(function Content({ className, ...props }, ref) {
  const maxWidth = useMaxWidth();
  const style = useMemo(() => ({ maxWidth }), [maxWidth]);
  return (
    <MaxWidthBox className=" fixed left-[50%] translate-x-[-50%] bottom-0 w-screen">
      <Drawer.Content
        ref={ref}
        className={cn(` w-full focus:outline-none outline-none`, className)}
        style={style}
        {...props}
      />
    </MaxWidthBox>
  );
});

export const BottomSheet = {
  Root,
  Trigger,
  Close,
  Portal,
  Overlay,
  Title,
  Description,
  Content,
  Handle,
};
