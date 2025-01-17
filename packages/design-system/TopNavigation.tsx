import { BackIcon } from "@repo/icon/BackIcon";
import { KebabIcon } from "@repo/icon/KebabIcon";
import type { ComponentProps, ComponentPropsWithoutRef, ReactNode } from "react";
import { Text } from "./Text";
import { cn } from "./cn";

const Root = (
  props: ComponentPropsWithoutRef<"header"> & { left?: ReactNode; right?: ReactNode },
) => {
  const { left, right, children, className, ...rest } = props;
  return (
    <>
      <header className={cn(" flex items-center justify-between px-[6px]", className)} {...rest}>
        {left}
        {children}
        {right}
      </header>
    </>
  );
};

const Back = (props: Omit<ComponentPropsWithoutRef<"button">, "color"> & { color?: string }) => {
  const { color, className, ...rest } = props;
  return (
    <button className={cn(" size-[42px] flex justify-center items-center", className)} {...rest}>
      <BackIcon color={color} />
    </button>
  );
};

const Kebab = (props: Omit<ComponentPropsWithoutRef<"button">, "color"> & { color?: string }) => {
  const { color, className, ...rest } = props;
  return (
    <button className={cn(" size-[42px] flex justify-center items-center", className)} {...rest}>
      <KebabIcon color={color} />
    </button>
  );
};

const Title = (props: ComponentProps<typeof Text>) => {
  const { children, className, ...rest } = props;
  return (
    <Text variant={"body/18_sb"} className={cn("", className)} {...rest}>
      {children}
    </Text>
  );
};

export const TopNavigation = {
  Root,
  Back,
  Kebab,
  Title,
};
