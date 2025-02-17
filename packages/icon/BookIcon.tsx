import { cn } from "@repo/design-system/cn";
import { vars } from "@repo/token";
import type { ComponentPropsWithoutRef } from "react";

export const BookIcon = (props: ComponentPropsWithoutRef<"svg"> & { selected?: boolean }) => {
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
        d="M16.4147 27.2559C16.8343 27.4489 17.1719 27.6419 17.4007 27.7841C17.7302 27.9887 18.0065 28.2292 18.418 28.2292C18.8203 28.2292 19.1058 27.9864 19.4329 27.7841C19.6618 27.6419 19.9993 27.4489 20.4189 27.2559C21.2662 26.864 22.3968 26.4952 23.6186 26.4952C25.0971 26.4952 26.4368 27.0362 27.2945 27.4917C27.5652 27.6336 27.8669 27.7058 28.1725 27.7018C28.4781 27.6978 28.7779 27.6176 29.0447 27.4685C29.5382 27.1957 29.9764 26.6478 29.9764 25.9173V11.4679C29.9764 10.75 29.6353 10.0079 28.9383 9.58481C28.0436 9.04151 26.0299 8 23.6186 8C21.9506 8 20.4802 8.49706 19.4491 8.97331C19.0399 9.16289 18.6908 9.35246 18.4168 9.5143C18.1429 9.35246 17.7938 9.16289 17.3846 8.97331C16.3535 8.49822 14.8831 8 13.215 8C10.8037 8 8.79005 9.04036 7.89535 9.58481C7.57464 9.78254 7.31052 10.0598 7.12863 10.3898C6.94675 10.7197 6.85328 11.0911 6.8573 11.4679V25.9173C6.8573 26.649 7.29541 27.1957 7.789 27.4685C8.27797 27.7379 8.94033 27.8096 9.54027 27.4917C10.3968 27.0362 11.7366 26.4952 13.215 26.4952C14.4369 26.4952 15.5674 26.8651 16.4147 27.2559Z"
        fill={fill}
      />
    </svg>
  );
};
