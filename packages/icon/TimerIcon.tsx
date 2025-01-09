import { cn } from "@repo/design-system/cn";
import { vars } from "@repo/token";
import type { ComponentPropsWithoutRef } from "react";

export const TimerIcon = (props: ComponentPropsWithoutRef<"svg"> & { selected?: boolean }) => {
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
      <g clip-path="url(#clip0_188_3681)">
        <path
          className=" duration-200 transition-all"
          d="M18.127 8.63882C18.127 9.45982 18.789 10.1138 19.591 10.2828C21.3467 10.6563 22.9208 11.6216 24.0497 13.0172C25.1786 14.4128 25.7937 16.1538 25.792 17.9488C25.792 22.2748 22.293 25.7818 17.977 25.7818C16.5952 25.7837 15.2379 25.4172 14.045 24.7198C13.329 24.3008 12.385 24.3478 11.838 24.9728L11.044 25.8788C10.495 26.5038 10.553 27.4648 11.24 27.9318C13.2267 29.2827 15.5745 30.0034 17.977 29.9998C24.617 29.9998 30 24.6048 30 17.9488C30 11.8598 25.495 6.82582 19.644 6.01282C18.815 5.89682 18.127 6.58382 18.127 7.42382V8.63882ZM8.01 21.3758C7.21 21.6458 6.774 22.5108 7.144 23.2618C7.39933 23.7798 7.68967 24.2772 8.015 24.7538C8.488 25.4468 9.464 25.5058 10.1 24.9558L11.021 24.1588C11.657 23.6078 11.707 22.6568 11.281 21.9348L11.246 21.8748C10.827 21.1488 9.969 20.7168 9.169 20.9858L8.01 21.3758ZM7.688 19.9918C6.881 20.1538 6.088 19.6228 6.03 18.7938C5.99 18.2225 5.99 17.6512 6.03 17.0798C6.088 16.2508 6.881 15.7198 7.688 15.8818L8.856 16.1148C9.663 16.2768 10.172 17.0718 10.168 17.9028V17.9708C10.172 18.8018 9.663 19.5968 8.856 19.7578L7.688 19.9918Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_188_3681">
          <rect width="24" height="24" fill="white" transform="translate(6 6)" />
        </clipPath>
      </defs>
    </svg>
  );
};
