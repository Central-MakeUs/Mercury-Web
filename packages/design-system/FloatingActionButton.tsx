import { type ComponentPropsWithoutRef, type Ref, forwardRef } from "react";
import { cn } from "./cn";

export const FloatingActionButton = forwardRef(function FloatingActionButton(
  { children, className, ...rest }: ComponentPropsWithoutRef<"button">,
  ref?: Ref<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      // bg - green
      // ring - aquagreen
      className={cn(
        " bg-[#00CD80] ring-[2px] ring-[#5EE0AF] flex justify-center items-center w-[60px] h-[60px] rounded-full",
        className,
      )}
      {...rest}
    >
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.1016 -8.74228e-08C13.2061 -3.91405e-08 14.1016 0.89543 14.1016 2L14.1016 22C14.1016 23.1046 13.2061 24 12.1016 24C10.997 24 10.1016 23.1046 10.1016 22L10.1016 2C10.1016 0.89543 10.997 -1.35705e-07 12.1016 -8.74228e-08Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 11.8994C24 13.004 23.1046 13.8994 22 13.8994L2 13.8994C0.89543 13.8994 1.1462e-07 13.004 2.5601e-07 11.8994C3.97401e-07 10.7948 0.89543 9.89941 2 9.89941L22 9.89941C23.1046 9.89941 24 10.7948 24 11.8994Z"
          fill="white"
        />
      </svg>
    </button>
  );
});
