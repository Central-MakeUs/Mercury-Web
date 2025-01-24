import * as DropdownPrimitives from "@radix-ui/react-dropdown-menu";
import { textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

const Root = DropdownPrimitives.Root;
const Trigger = forwardRef<
  ElementRef<typeof DropdownPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitives.Trigger>
>(({ className, ...props }, ref) => (
  <DropdownPrimitives.Trigger
    ref={ref}
    className={cn(" focus:outline-none ", className)}
    {...props}
  />
));

export const Portal = DropdownPrimitives.Portal;

export const Content = forwardRef<
  ElementRef<typeof DropdownPrimitives.Content>,
  ComponentPropsWithoutRef<typeof DropdownPrimitives.Content>
>(({ className, ...props }, ref) => (
  <DropdownPrimitives.Content
    ref={ref}
    className={cn(
      " data-[state=open]:animate-fade-in-200 data-[state=closed]:animate-fade-out-200 bg-white rounded-[14px] shadow-[0px_8px_12px_0px_rgba(0,0,0,0.2)] ",
      className,
    )}
    align="end"
    side="bottom"
    sideOffset={8}
    {...props}
  />
));
Content.displayName = "DropdownContent";

export const Item = forwardRef<
  ElementRef<typeof DropdownPrimitives.Item>,
  ComponentPropsWithoutRef<typeof DropdownPrimitives.Item> & { onClick?: () => void }
>(({ className, onClick, ...props }, ref) => (
  <DropdownPrimitives.Item
    ref={ref}
    onClick={onClick}
    className={cn(
      " focus:outline-none px-4 py-[8.5px] text-gray-600 cursor-pointer mr-[25px]",
      textVariants({ variant: "body/15_m" }),
      className,
    )}
    {...props}
  />
));
Item.displayName = "DropdownItem";

export const DropdownMenu = {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
};
