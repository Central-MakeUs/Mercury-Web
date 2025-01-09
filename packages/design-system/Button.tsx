import type { ComponentPropsWithoutRef } from "react";
import { textVariants } from "./Text";
import { cn } from "./cn";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "warning" | "delete";
}

export const Button = ({ children, className, variant = "primary", ...props }: ButtonProps) => {
  const variantStyles = {
    primary: "bg-green text-white-pink",
    warning: "bg-pastel-red text-white-pink",
    delete: "bg-gray-200 text-gray-800",
  };

  return (
    <button
      className={cn(
        textVariants({ variant: "title/18_sb" }),
        variantStyles[variant],
        "rounded-[30px] max-h-[54px] min-w-[146px]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
