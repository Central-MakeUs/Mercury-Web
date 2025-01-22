import { BackIcon } from "@repo/icon/BackIcon";
import { KebabIcon } from "@repo/icon/KebabIcon";
import {
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ReactNode,
  forwardRef,
  useState,
} from "react";
import { DropdownMenu } from "~/features/bookRecordDetail/components/DropDownMenu";
import { Text } from "./Text";
import { cn } from "./cn";

const Root = (
  props: ComponentPropsWithoutRef<"header"> & { left?: ReactNode; right?: ReactNode },
) => {
  const { left, right, children, className, ...rest } = props;
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  return (
    <>
      <DropdownMenu.Root open={isDropDownOpen} onOpenChange={setIsDropDownOpen}>
        <header
          className={cn(
            " relative flex items-center justify-between px-[6px] min-h-[48px] py-[3px]",
            className,
          )}
          {...rest}
        >
          {left ?? <div />}
          {children ?? <div />}
          {right ?? <div />}
        </header>
      </DropdownMenu.Root>
    </>
  );
};

const Back = (props: Omit<ComponentPropsWithoutRef<"button">, "color"> & { color?: string }) => {
  const { color, className, ...rest } = props;
  return (
    <>
      <button
        className={cn("  absolute size-[42px] flex justify-center items-center", className)}
        {...rest}
      >
        <BackIcon color={color} />
      </button>
      <div />
    </>
  );
};

const Kebab = forwardRef<
  HTMLButtonElement,
  Omit<ComponentPropsWithoutRef<"button">, "color"> & { color?: string }
>(({ color, className, ...rest }, ref) => {
  return (
    <>
      <DropdownMenu.Trigger asChild={true}>
        <button
          ref={ref} // ✅ `ref` 추가
          className={cn("absolute size-[42px] flex justify-center items-center", className)}
          {...rest}
        >
          <KebabIcon color={color} />
        </button>
      </DropdownMenu.Trigger>
      <div />
    </>
  );
});

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
