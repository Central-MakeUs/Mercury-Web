import { Box, type BoxRef } from "@repo/ui/Box";
import type { BoxProps } from "@repo/ui/Box";
import { type VariantProps, cva } from "class-variance-authority";
import { type ElementType, forwardRef } from "react";
import { cn } from "./cn";

export const textVariants = cva("leading-[150%] tracking-[-2%]", {
  variants: {
    variant: {
      "title/25_b": "font-bold text-[25px]",
      "title/25_sb": "font-semibold text-[25px]",
      "title/25_m": "font-medium text-[25px]",
      "title/24_sb": "font-semibold text-[24px]",
      "title/24_m": "font-medium text-[24px]",
      "title/20_b": "font-bold text-[20px]",
      "title/20_sb": "font-semibold text-[20px]",
      "body/18_b": "font-bold text-[18px]",
      "body/18_sb": "font-semibold text-[18px]",
      "body/18_m": "font-medium text-[18px]",
      "body/16_sb": "font-semibold text-[16px]",
      "body/16_m": "font-medium text-[16px]",
      "body/15_r": "font-normal text-[15px]",
      "body/15_sb": "font-semibold text-[15px]",
      "body/15_m": "font-medium text-[15px]",
      "body/14_sb": "font-semibold text-[14px]",
      "body/14_m": "font-medium text-[14px]",
      "body/13_r": "font-normal text-[13px]",
      "caption/12_sb": "font-semibold text-[12px]",
      "caption/12_m": "font-medium text-[12px]",
      "caption/12_r": "font-normal text-[12px]",
    },
  },
});
type TextProps = VariantProps<typeof textVariants>;

export const Text = forwardRef(function Text<C extends ElementType = "span">(
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
