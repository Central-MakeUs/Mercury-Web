import * as ProgressPrimitives from "@radix-ui/react-progress";
import { textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { Flex } from "@repo/ui/Flex";
import { motion } from "motion/react";
import type { ComponentProps } from "react";
import useAnimationCounter from "~/shared/hooks/useAnimationCounter";

export const ProgressBar = (
  props: ComponentProps<typeof ProgressPrimitives.Root> & { totalExp: number; currentExp: number },
) => {
  const { children, value, totalExp, currentExp, style, ...rest } = props;
  const currentExpText = useAnimationCounter({
    to: currentExp,
    start: 0,
    duration: 1,
    delay: 0.3,
  });

  const totalExpText = useAnimationCounter({
    to: totalExp,
    start: 0,
    duration: 1,
    delay: 0.3,
  });

  return (
    <ProgressPrimitives.Root
      className="relative h-[25px] w-full overflow-hidden rounded-full border-[2px] border-white-violet  bg-white-violet"
      style={{
        transform: "translateZ(0)",
        ...style,
      }}
      {...rest}
      value={value}
    >
      <ProgressPrimitives.Indicator
        className=" size-full  rounded-full   transition-transform duration-[660ms]"
        asChild={true}
      >
        <motion.div
          className="h-full bg-gradient-to-r rounded-full  from-main4-gradient-from to-main4-gradient-to"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </ProgressPrimitives.Indicator>

      <Flex className=" absolute gap-x-[8px] items-center top-0 left-0 z-10 px-[12px] w-full h-full">
        <motion.span className={cn(textVariants({ variant: "caption/12_m" }), "text-white")}>
          {currentExpText}
        </motion.span>
        <motion.span className={cn(" text-[10px] font-light text-white")}>
          {totalExpText}
        </motion.span>
      </Flex>
      {children}
    </ProgressPrimitives.Root>
  );
};
