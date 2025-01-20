import type { ComponentPropsWithoutRef } from "react";
import { textVariants } from "./Text";
import { cn } from "./cn";

export const CtaButton = (props: ComponentPropsWithoutRef<"button">) => {
  const { children, disabled, className } = props;
  return (
    <button
      className={cn(
        textVariants({ variant: "title/20_sb" }),
        "rounded-[30px] min-h-[54px] bg-green text-white w-full",
        disabled && "bg-gray-200 text-gray-400",
        className,
      )}
      {...props}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};
