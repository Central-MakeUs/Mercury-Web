import { Box, type BoxRef } from "@repo/ui/Box";
import type { BoxProps } from "@repo/ui/Box";
import { VariantProps, cva } from "class-variance-authority";
import { type ElementType, forwardRef } from "react";
import { cn } from "./cn";

export const textVariants = cva("", {
  variants: {
    variant: {
      title25b: "",
    },
  },
});

type TextProps = VariantProps<typeof textVariants>;

export const Text = forwardRef(function Text<C extends ElementType = "div">(
  { as, className, variant, ...rest }: BoxProps<C> & TextProps,
  ref?: BoxRef<C>,
) {
  const typesRest = rest as BoxProps<C>;
  return (
    <Box className={cn(textVariants({ variant }), className)} ref={ref} as={as} {...typesRest} />
  );
}) as <C extends ElementType = "div">(
  props: BoxProps<C> & { ref?: BoxRef<C> } & TextProps,
) => JSX.Element;
