import { cn } from "@repo/design-system/cn";
import { vars } from "@repo/token";
import type { ComponentPropsWithoutRef } from "react";

export const HomeIcon = (props: ComponentPropsWithoutRef<"svg"> & { selected?: boolean }) => {
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
      <path
        className=" duration-200 transition-all"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.1347 7.35785C17.3642 7.12872 17.6755 7 18 7C18.3245 7 18.6358 7.12872 18.8653 7.35785L26.2087 14.6913L28.6564 17.1357C28.8794 17.3663 29.0027 17.675 29 17.9955C28.9972 18.3159 28.8684 18.6225 28.6415 18.8491C28.4146 19.0757 28.1076 19.2043 27.7867 19.207C27.4658 19.2098 27.1567 19.0866 26.9259 18.864L26.5673 18.5059V26.5555C26.5673 27.2038 26.3094 27.8256 25.8503 28.284C25.3913 28.7425 24.7687 29 24.1195 29H20.4478C20.1232 29 19.8119 28.8712 19.5824 28.642C19.3528 28.4128 19.2239 28.1019 19.2239 27.7778V24.1111H16.7761V27.7778C16.7761 28.1019 16.6472 28.4128 16.4176 28.642C16.1881 28.8712 15.8768 29 15.5522 29H11.8805C11.2313 29 10.6087 28.7425 10.1497 28.284C9.69064 27.8256 9.43275 27.2038 9.43275 26.5555V18.5059L9.07415 18.864C8.84332 19.0866 8.53416 19.2098 8.21326 19.207C7.89236 19.2043 7.58539 19.0757 7.35847 18.8491C7.13155 18.6225 7.00283 18.3159 7.00005 17.9955C6.99726 17.675 7.12062 17.3663 7.34356 17.1357L9.79135 14.6913L17.1347 7.35785Z"
        fill={fill}
      />
    </svg>
  );
};
