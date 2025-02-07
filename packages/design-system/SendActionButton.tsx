import { SendIcon } from "@repo/icon/SendIcon";
import { type ComponentPropsWithoutRef, type Ref, forwardRef } from "react";
import { cn } from "./cn";

type FloatingActionButtonProps = ComponentPropsWithoutRef<"button"> & {
  active: boolean;
};

export const SendActionButton = forwardRef(function FloatingActionButton(
  { active, className, ...rest }: FloatingActionButtonProps,
  ref?: Ref<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      className={cn(
        active ? "bg-green " : "bg-gray-200",
        " ring-[2px] flex justify-center items-center w-[38px] h-[38px] rounded-full",
        className,
      )}
      {...rest}
    >
      <SendIcon />
    </button>
  );
});
