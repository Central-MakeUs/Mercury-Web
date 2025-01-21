import { textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";

import { ToggleButton } from "@repo/ui/ToggleButton";

import type { ComponentProps } from "react";

export const BookRecordToggleButton = (props: ComponentProps<typeof ToggleButton>) => {
  const { children, className, ...rest } = props;
  return (
    <ToggleButton
      className={cn(
        textVariants({ variant: "body/16_sb" }),
        " data-[state=selected]:text-gray-500 text-gray-300",
        className,
      )}
      {...rest}
    >
      {children}
    </ToggleButton>
  );
};
