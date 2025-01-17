import { BackIcon } from "@repo/icon/BackIcon";
import { KebabIcon } from "@repo/icon/KebabIcon";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "./cn";

const _Root = () => {
  return (
    <>
      <header className=" "></header>
    </>
  );
};

const _Back = (props: Omit<ComponentPropsWithoutRef<"button">, "color"> & { color?: string }) => {
  const { color, className, ...rest } = props;
  return (
    <button className={cn(" size-[42px] flex justify-center items-center", className)} {...rest}>
      <BackIcon color={color} />
    </button>
  );
};

const _Kebab = (props: Omit<ComponentPropsWithoutRef<"button">, "color"> & { color?: string }) => {
  const { color, className, ...rest } = props;
  return (
    <button className={cn(" size-[42px] flex justify-center items-center", className)} {...rest}>
      <KebabIcon color={color} />
    </button>
  );
};
