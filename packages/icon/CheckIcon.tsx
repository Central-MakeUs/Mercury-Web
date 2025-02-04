import { vars } from "@repo/token";
import type { ComponentPropsWithoutRef } from "react";

export const CheckIcon = (props: ComponentPropsWithoutRef<"svg"> & { checked?: boolean }) => {
  const { checked, className, ...rest } = props;

  return (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      {checked && (
        <defs>
          <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={vars.colors["main4-gradient-from"]} />
            <stop offset="100%" stopColor={vars.colors["main4-gradient-to"]} />
          </linearGradient>
        </defs>
      )}
      <path
        d="M12.4997 1.38867C18.2528 1.38867 22.9163 6.05221 22.9163 11.8053C22.9163 17.5585 18.2528 22.222 12.4997 22.222C6.74655 22.222 2.08301 17.5585 2.08301 11.8053C2.08301 6.05221 6.74655 1.38867 12.4997 1.38867ZM16.182 8.03555L11.0257 13.1918L8.81738 10.9824C8.72067 10.8856 8.60584 10.8089 8.47945 10.7565C8.35307 10.704 8.21759 10.6771 8.08077 10.677C7.80445 10.6769 7.5394 10.7866 7.34395 10.9819C7.14849 11.1772 7.03862 11.4422 7.03853 11.7185C7.03843 11.9948 7.1481 12.2599 7.34342 12.4553L10.2163 15.3283C10.3227 15.4347 10.4491 15.5192 10.5881 15.5768C10.7272 15.6344 10.8762 15.6641 11.0268 15.6641C11.1773 15.6641 11.3263 15.6344 11.4654 15.5768C11.6044 15.5192 11.7308 15.4347 11.8372 15.3283L17.6559 9.5095C17.8514 9.31405 17.9612 9.04895 17.9612 8.77253C17.9612 8.49611 17.8514 8.23101 17.6559 8.03555C17.4605 7.84009 17.1954 7.73028 16.9189 7.73028C16.6425 7.73028 16.3774 7.84009 16.182 8.03555Z"
        fill={checked ? "url(#bookGradient)" : vars.colors.gray[200]}
      />
    </svg>
  );
};
