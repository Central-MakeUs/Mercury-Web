import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@repo/design-system/cn";
import { Box } from "@repo/ui/Box";
import type { ComponentProps } from "react";

export const SingleSlider = (
  props: Omit<
    ComponentProps<typeof SliderPrimitive.Root>,
    "value" | "onValueChange" | "onChange"
  > & {
    value?: number;
    onChange?: (value: number) => void;
  },
) => {
  const { className, value, onChange, ...rest } = props;

  return (
    <SliderPrimitive.Root
      {...rest}
      value={value ? [value] : undefined}
      onValueChange={(value) => onChange?.(value[0])}
      className={cn(
        "relative w-full flex touch-none select-none  items-center h-[48px] grow ",
        className,
      )}
    >
      <SliderPrimitive.Track className="bg-gray-200 relative rounded-full w-full h-[24px]">
        <SliderPrimitive.Range
          className={cn(
            "absolute bg-gradient-to-r from-main2-gradient-from via-main2-gradient-via to-main2-gradient-to h-full min-w-[30px]",
            value && value < 30 ? "rounded-l-full rounded-r-none" : "rounded-full",
          )}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className=" duration-300 transition-transform active:scale-105 flex justify-center items-center focus:outline-none size-[48px] rounded-full bg-pastel-red bg-gradient-to-tl from-green to-yellow-green">
        <Box className=" size-[40px] rounded-full bg-green flex justify-center items-center">
          <Box className=" size-[22px] rounded-full bg-yellow-green" />
        </Box>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
};
