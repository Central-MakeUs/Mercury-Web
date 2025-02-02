import { SettingsIcon } from "@repo/icon/SettingsIcon";
import { type ComponentPropsWithoutRef, type Ref, forwardRef } from "react";
import { cn } from "./cn";

const Button = forwardRef(function Button(
  props: ComponentPropsWithoutRef<"button">,
  ref: Ref<HTMLButtonElement>,
) {
  const { className, children, ...rest } = props;
  return (
    <button
      ref={ref}
      {...rest}
      className={cn(" flex justify-center items-center relative", className)}
    >
      {children}
    </button>
  );
});

const Icon = () => {
  return <SettingsIcon />;
};

export const SettingsBadge = {
  Button,
  Icon,
};
