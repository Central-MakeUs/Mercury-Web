import type { ComponentPropsWithoutRef } from "react";

export const CheckIconHome = (props: ComponentPropsWithoutRef<"svg"> & { checked?: boolean }) => {
  const { checked, ...rest } = props;

  return checked ? (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_1693_12543)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 12.5C25 19.375 19.375 25 12.5 25C5.625 25 0 19.375 0 12.5C0 5.625 5.625 0 12.5 0C19.375 0 25 5.625 25 12.5Z"
          fill="url(#paint0_linear_1693_12543)"
        />
        <path
          d="M7.375 12.125L11.25 16L17.625 9.6875"
          stroke="#F5F5F9"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1693_12543"
          x1="0"
          y1="12.5"
          x2="25"
          y2="12.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7CACD2" />
          <stop offset="1" stopColor="#A269FF" />
        </linearGradient>
        <clipPath id="clip0_1693_12543">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g clipPath="url(#clip0_1693_12532)">
        <path
          d="M24.25 12.5C24.25 18.9608 18.9608 24.25 12.5 24.25C6.03921 24.25 0.75 18.9608 0.75 12.5C0.75 6.03921 6.03921 0.75 12.5 0.75C18.9608 0.75 24.25 6.03921 24.25 12.5Z"
          stroke="#E7EAF1"
          strokeWidth="1.5"
        />
        <path
          d="M7.375 12.125L11.25 16L17.625 9.6875"
          stroke="#E7EAF1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1693_12532">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
