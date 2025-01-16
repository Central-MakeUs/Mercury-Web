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
}) => {
  const images = objectEntries(props.caseBy ?? {});
  return (
    <MaxWidthBox className={cn("relative", props.className)}>
      <AnimatePresence>
        {images.map(([key, itemValue]) => {
          return (
            key === props.value && (
              <motion.div
                key={key}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {itemValue}
              </motion.div>
            )
          );
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...rest}
      className={cn(
        "absolute flex justify-center items-center w-full h-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
        className,
      )}
    />
  );
});
