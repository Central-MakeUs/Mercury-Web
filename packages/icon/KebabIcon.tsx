import { cn } from "@repo/design-system/cn";
import { vars } from "@repo/token";
import type { ComponentPropsWithoutRef } from "react";

export const KebabIcon = (
  props: Omit<ComponentPropsWithoutRef<"div">, "color"> & { color?: string },
) => {
  const { color = vars.colors.gray[400], className, ...rest } = props;
  const style = {
    backgroundColor: color,
  };
  return (
    <div className={cn(" flex flex-col gap-y-[4.2px]", className)} {...rest}>
      <div className=" size-[4.2px] rounded-full" style={style} />
      <div className=" size-[4.2px] rounded-full" style={style} />
      <div className=" size-[4.2px] rounded-full" style={style} />
    </div>
  );
};
