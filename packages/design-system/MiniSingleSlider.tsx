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
        <SliderPrimitive.Track className="bg-gray-200 relative rounded-full w-full h-full">
          <SliderPrimitive.Range
            className={cn(
              "absolute bg-gradient-to-r from-main2-gradient-from via-main2-gradient-via to-main2-gradient-to h-full rounded-full min-w-3",
            )}
          />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className=" duration-300 transition-transform active:scale-105 flex justify-center items-center focus:outline-none size-[12px] rounded-full bg-pastel-red bg-gradient-to-tl from-green to-yellow-green">
          <Box className=" size-[calc(12px-2px)] rounded-full bg-green flex justify-center items-center">
            <Box className=" size-[6px] rounded-full bg-yellow-green" />
          </Box>
        </SliderPrimitive.Thumb>
      </SliderPrimitive.Root>
    </Box>
  );
};
