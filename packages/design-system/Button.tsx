import { cva } from "class-variance-authority";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import { textVariants } from "./Text";
import { cn } from "./cn";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "warning" | "gray";
  size?: "small" | "medium";
}

const buttonStyles = cva("rounded-[30px] py-[12px] max-h-[50px]", {
  variants: {
    variant: {
      primary: "bg-green text-white",
      warning: "bg-pastel-red text-white",
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

export const Button = forwardRef<ElementRef<"button">, ButtonProps & { loading?: boolean }>(
  ({ children, className, variant = "primary", size = "small", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          textVariants({ variant: "body/18_sb" }),
          buttonStyles({ variant, size }),
          className,
        )}
        {...props}
        disabled={props.disabled || props.loading}
        aria-disabled={props.disabled || props.loading}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
