import { cn } from "@repo/design-system/cn";
import { vars } from "@repo/token";
import type { ComponentPropsWithoutRef } from "react";

export const MyIcon = (props: ComponentPropsWithoutRef<"svg"> & { selected?: boolean }) => {
  const { selected, className, ...rest } = props;
  const fill = props.selected ? vars.colors["pastel-violet"] : vars.colors.gray[300];
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      className={cn("duration-200 transition-all", className)}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_169_3445)">
        <path
          className=" duration-200 transition-all"
          d="M18.4242 20.6752C16.5727 20.6752 14.9784 19.9809 13.667 18.5795C12.3427 17.1909 11.687 15.5066 11.687 13.5523C11.687 11.598 12.3427 9.91374 13.667 8.52517C14.9913 7.1366 16.5727 6.42946 18.4242 6.42946C20.2756 6.42946 21.8699 7.12374 23.1813 8.52517C24.5056 9.91374 25.1613 11.598 25.1613 13.5523C25.1613 15.5066 24.5056 17.1909 23.1813 18.5795C21.857 19.968 20.2756 20.6752 18.4242 20.6752Z"
          fill={fill}
        />
        <path
          className=" duration-200 transition-all"
          d="M30.0214 27.8224C28.9156 24.9167 25.6756 22.7824 22.1656 22.2553C20.6871 22.0367 19.5042 22.0367 18.4371 22.0496C17.3699 22.0496 16.1871 22.0367 14.7085 22.2553C11.1985 22.7824 7.9585 24.9167 6.85278 27.8224C6.72452 28.1606 6.63393 28.4835 6.57053 28.7807C6.36241 29.7564 7.1965 30.5096 8.19409 30.5096H28.6743C29.6799 30.5096 30.5176 29.7456 30.3073 28.7622C30.2449 28.4701 30.157 28.1535 30.0342 27.8224H30.0214Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_169_3445">
          <rect
            width="24.0172"
            height="24.0814"
            fill="white"
            transform="translate(6.42847 6.42946)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
