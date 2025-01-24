import { textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { Stack } from "@repo/ui/Stack";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import { Dialog } from "./Dialog";

export const Item = forwardRef<ElementRef<"button">, ComponentPropsWithoutRef<"button">>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "py-[8.5px] text-gray-600 bg-white text-left",
        textVariants({ variant: "body/15_m" }),
        className,
      )}
      {...props}
    />
  ),
);
Item.displayName = "DialogItem";

interface DialogMenuProps {
  items: { label: string; onClick: () => void }[];
}

export const DialogMenu = ({ items }: DialogMenuProps) => {
  return (
    <Dialog.Content>
      <Stack className="px-4 py-2">
        {items.map((item, index) => (
          <Item key={index} onClick={item.onClick}>
            {item.label}
          </Item>
        ))}
      </Stack>
    </Dialog.Content>
  );
};
