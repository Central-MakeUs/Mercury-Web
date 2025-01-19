import { Box, type BoxProps } from "@repo/ui/Box";
import { type ComponentPropsWithoutRef, type ElementType, forwardRef } from "react";
import { Text, textVariants } from "./Text";
import { cn } from "./cn";

const Layout = <C extends ElementType>(props: BoxProps<C>) => {
  const { children, className, ...rest } = props;
  const Component = props.as ?? "label";
  const typedRest = rest as BoxProps<C>;
  return (
    <Box as={Component} className={cn("relative w-full h-fit", className)} {...typedRest}>
      {children}
    </Box>
  );
};

const Field = forwardRef<
  HTMLTextAreaElement,
  ComponentPropsWithoutRef<"textarea"> & { resize?: boolean }
>(function Field(props, ref) {
  const { className, resize = false, ...rest } = props;
  return (
    <textarea
      ref={ref}
      {...rest}
      className={cn(
        textVariants({ variant: "body/16_m" }),
        "scrollbar  w-full h-full outline-none bg-yellow-green py-[9px] px-[15px] rounded-[12px] text-gray-600 placeholder:gray-400",
        className,
        resize ? "resize" : "resize-none",
      )}
    />
  );
});

const LetterCountPosition = (props: ComponentPropsWithoutRef<"div">) => {
  const { children, className, ...rest } = props;
  return (
    <div
      className={cn(
        "absolute bottom-[-27px] right-[-30px] translate-x-[-14px] translate-y-[-14px]",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

const LetterCount = (
  props: Omit<ComponentPropsWithoutRef<"span">, "children"> & { letterCount: number },
) => {
  const { letterCount, className, ...rest } = props;

  return (
    <Text
      variant="body/14_m"
      className={cn(
        "absolute bottom-[29px] right-[30px]",
        letterCount === 0 && "text-gray-300",
        letterCount > 0 && "text-gray-500",
        className,
      )}
      {...rest}
    >
      {letterCount}
    </Text>
  );
};

export const TextArea = {
  Layout,
  Field,
  LetterCountPosition,
  LetterCount,
};
