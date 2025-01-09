import type { ComponentPropsWithoutRef } from "react";
import { textVariants } from "./Text";
import { cn } from "./cn";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "warning" | "gray";
  size?: "small" | "medium";
}

import { cva } from "class-variance-authority";

const buttonStyles = cva("rounded-[30px] max-h-[50px]", {
  variants: {
    variant: {
      primary: "bg-green text-white-pink",
      warning: "bg-pastel-red text-white-pink",
      gray: "bg-gray-200 text-gray-800",
    },
    size: {
      small: "min-w-[146px]",
      medium: "min-w-[216px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "small",
  },
});

export const Button = ({
  children,
  className,
  variant = "primary",
  size = "small",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        textVariants({ variant: "title/18_sb" }),
        buttonStyles({ variant, size }),
        "rounded-[30px] max-h-[50px]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
