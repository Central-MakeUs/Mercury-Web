import type { ComponentPropsWithoutRef } from "react";

export const BackIcon = (
  props: Omit<ComponentPropsWithoutRef<"svg">, "color"> & { color?: string },
) => {
  const { className, color = "#555A6E", ...rest } = props;
  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        className=" transition-all duration-header"
        d="M26.25 12.2498L17.5 20.9998L26.25 29.7498"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
