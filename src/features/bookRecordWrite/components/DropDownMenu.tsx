import * as Dropdown from "@radix-ui/react-dropdown-menu";
import { textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";

export const Root = Dropdown.Root;
export const Trigger = Dropdown.Trigger;
export const Portal = Dropdown.Portal;

export const Content = forwardRef<
  ElementRef<typeof Dropdown.Content>,
  ComponentPropsWithoutRef<typeof Dropdown.Content>
>(({ className, ...props }, ref) => (
  <Dropdown.Content
    ref={ref}
    className={cn("bg-white rounded-[14px] shadow-lg p-2 z-[2]", className)}
    align="end"
    side="bottom"
    sideOffset={8}
    {...props}
  />
));
Content.displayName = "DropdownContent";

export const Item = forwardRef<
  ElementRef<typeof Dropdown.Item>,
  ComponentPropsWithoutRef<typeof Dropdown.Item> & { onClick?: () => void }
>(({ className, onClick, ...props }, ref) => (
  <Dropdown.Item
    ref={ref}
    onClick={onClick}
    className={cn(
      "px-4 py-[8.5px] text-gray-600 cursor-pointer mr-[25px]",
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
