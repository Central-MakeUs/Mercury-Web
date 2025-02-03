import * as ProgressPrimitives from "@radix-ui/react-progress";
import { motion } from "motion/react";
import type { ComponentProps } from "react";

export const ExpProgressBar = (
  props: ComponentProps<typeof ProgressPrimitives.Root> & { totalExp: number; currentExp: number },
) => {
  const { children, value, totalExp, currentExp, style, ...rest } = props;

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
      {children}
    </ProgressPrimitives.Root>
  );
};
