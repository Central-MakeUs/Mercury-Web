import * as SliderPrimitive from "@radix-ui/react-slider";
import { Box } from "@repo/ui/Box";
import type { ComponentProps } from "react";
import { cn } from "./cn";

export const MiniSingleSlider = (
  props: Omit<
    ComponentProps<typeof SliderPrimitive.Root>,
    "value" | "onValueChange" | "onChange"
  > & {
    value: number;
    onChange?: (value: number) => void;
  },
) => {
  const { className, value, onChange, ...rest } = props;

  return (
    <Box className={cn(" w-fit", className)}>
      <SliderPrimitive.Root
        {...rest}
        value={value ? [value] : undefined}
        onValueChange={(value) => onChange?.(value[0])}
        className={cn("relative w-[23px] flex items-center h-[11px] grow rounded-full ")}
      >
        <Box className=" shadow-[inset_0_0_0_1px_rgba(252,255,232,0.2)] rounded-full w-full h-[8px] bg-gradient-to-r from-main2-gradient-from via-main2-gradient-via to-main2-gradient-to" />
        <SliderPrimitive.Track>
          <SliderPrimitive.Range />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className=" duration-300 transition-transform active:scale-105 flex justify-center items-center focus:outline-none size-[11px] rounded-full bg-pastel-red bg-gradient-to-tl from-green to-yellow-green">
          <Box className=" size-[calc(11px-2px)] rounded-full bg-green flex justify-center items-center">
            <Box className=" size-[5px] rounded-full bg-yellow-green" />
          </Box>
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </Box>
  );
};
