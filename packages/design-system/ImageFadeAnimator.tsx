import { Box } from "@repo/ui/Box";
import { objectEntries } from "@xionwcfm/utils";
import { AnimatePresence, motion } from "motion/react";
import { type ReactNode, forwardRef } from "react";
import type { ComponentProps, ElementRef } from "react";
import { MaxWidthBox } from "./MaxWidthBox";
import { cn } from "./cn";

export const ImageFadeAnimator = <T extends string>(props: {
  value: T;
  caseBy: {
    [key in T]: ReactNode;
  };
  className?: string;
  children?: ReactNode;
}) => {
  const images = objectEntries(props.caseBy ?? {});
  return (
    <MaxWidthBox className={cn("relative grid w-full", props.className)}>
      <AnimatePresence>
        {images.map(([key, itemValue]) => {
          return key === props.value && itemValue;
        })}
      </AnimatePresence>
    </MaxWidthBox>
  );
};

ImageFadeAnimator.FadeIn = forwardRef<
  ElementRef<typeof motion.div>,
  ComponentProps<typeof motion.div>
>(function FadeIn(props, ref) {
  const { className, ...rest } = props;
  return (
    <Box className=" col-start-1 row-start-1">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        {...rest}
      ></motion.div>
    </Box>
  );
});
