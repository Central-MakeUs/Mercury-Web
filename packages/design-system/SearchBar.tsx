import { type ComponentPropsWithoutRef, type Ref, forwardRef } from "react";
import { cn } from "./cn";

interface SearchBarProps extends ComponentPropsWithoutRef<"input"> {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export const SearchBar = forwardRef(function SearchBar(
  { children, className, left, right, ...rest }: SearchBarProps,
  ref?: Ref<HTMLInputElement>,
) {
  return (
    <div className=" w-full relative">
      <div className=" absolute top-[50%] translate-y-[-50%] translate-x-[14px] max-w-[24px] max-h-[24px]  overflow-clip flex justify-center items-center ">
        {left}
      </div>
      <input
        ref={ref}
        className={cn(
          "text-[18px]",
          // bg-gray-100 placeholder:text-gray-300
          " rounded-[12px] bg-[#F5F5F9] placeholder:text-[#C6C6CF] ",
          "  pt-[12px] pb-[9px] w-full duration-200 transition-colors focus:outline-none",
          left ? " pl-[50px] " : " pl-[12px] ",
          // text body/18_m
          className,
        )}
        {...rest}
      />
      <div className=" absolute top-[50%] translate-y-[-50%] right-0 translate-x-[-14px] max-w-[24px] max-h-[24px]  overflow-clip flex justify-center items-center ">
        {right}
      </div>
    </div>
  );
});
