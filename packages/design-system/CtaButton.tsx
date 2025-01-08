import { type ComponentPropsWithoutRef, type Ref, forwardRef } from "react";

type CtaButtonProps = ComponentPropsWithoutRef<"button"> & {
  text?: string;
  isActive: boolean;
};

export const CtaButton = forwardRef(function CtaButton(
  { text, isActive, children, className, ...rest }: CtaButtonProps,
  ref?: Ref<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      className={`${isActive ? "bg-green text-white" : "bg-gray-200 text-gray-400"} rounded-[30px] h-[54px] ${className}`}
      {...rest}
    >
      {text}
    </button>
  );
});
