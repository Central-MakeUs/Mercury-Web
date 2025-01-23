import type { ComponentPropsWithoutRef } from "react";
import { MaxWidthBox } from "./MaxWidthBox";
import { cn } from "./cn";

export const FixedBottom = (props: ComponentPropsWithoutRef<"div">) => {
  const { children, className, ...rest } = props;
  return (
    <MaxWidthBox
      className={cn(" fixed bottom-0 left-[50%] translate-x-[-50%]", className)}
      {...rest}
    >
      {props.children}
    </MaxWidthBox>
  );
};
