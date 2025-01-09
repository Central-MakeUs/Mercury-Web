import { BackIcon } from "@repo/icon/BackIcon";
import { type ComponentPropsWithoutRef, type Ref, forwardRef } from "react";
import { textVariants } from "./Text";
import { cn } from "./cn";

interface TopNavigationProps extends ComponentPropsWithoutRef<"button"> {
  title?: string;
}

export const TopNavigation = forwardRef(function SearchBar(
  { className, title = "독서기록", ...rest }: TopNavigationProps,
  ref?: Ref<HTMLButtonElement>,
) {
  return (
    <div className={cn("w-full relative flex items-center h-[48px]", className)}>
      <button
        ref={ref}
        className="absolute top-[50%] translate-y-[-50%] left-0 flex items-center justify-center w-[42px] h-[42px]"
        aria-label="Back"
        {...rest}
      >
        <BackIcon />
      </button>

      <h1 className={cn(textVariants({ variant: "title/18_sb" }), "flex-grow text-center")}>
        {title}
      </h1>
    </div>
  );
});
