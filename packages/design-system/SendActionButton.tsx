import { SendIcon } from "@repo/icon/SendIcon";
import { type ComponentPropsWithoutRef, type Ref, forwardRef } from "react";
import { cn } from "./cn";

type FloatingActionButtonProps = ComponentPropsWithoutRef<"button"> & {
  disabled?: boolean;
  loading?: boolean;
};

export const SendActionButton = forwardRef(function SendActionButton(
  { disabled, loading, className, ...rest }: FloatingActionButtonProps,
  ref?: Ref<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      className={cn(
        "ring-[2px] flex justify-center items-center w-[38px] h-[38px] rounded-full",
        disabled ? "bg-gray-200" : "bg-green",
        loading && "animate-pulse",
        className,
      )}
      {...rest}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
    >
      <SendIcon />
    </button>
  );
});
