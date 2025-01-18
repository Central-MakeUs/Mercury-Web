import { cn } from "@repo/design-system/cn";
import { vars } from "@repo/token";
import type { ComponentPropsWithoutRef } from "react";

export const KebabIcon = (
  props: Omit<ComponentPropsWithoutRef<"div">, "color"> & {
    color?: string;
    duration?: number | string;
  },
) => {
  const { color = vars.colors.gray[400], className, ...rest } = props;
  const style = {
    backgroundColor: color,
    transitionDuration: typeof props.duration === "number" ? `${props.duration}ms` : props.duration,
  };

  return (
    <div className={cn(" flex flex-col gap-y-[4.2px]", className)} {...rest}>
      <div className=" size-[4.2px] rounded-full transition-all" style={style} />
      <div className=" size-[4.2px] rounded-full transition-all" style={style} />
      <div className=" size-[4.2px] rounded-full transition-all" style={style} />
    </div>
  );
};
