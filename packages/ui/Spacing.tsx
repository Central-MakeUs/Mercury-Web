import { type ElementType, forwardRef } from "react";
import { Box, type BoxRef } from "./Box";
import type { BoxProps } from "./Box";

export const Spacing = forwardRef(function Spacing<C extends ElementType = "div">(
  { as, className, ...rest }: BoxProps<C>,
  ref?: BoxRef<C>,
) {
  const typesRest = rest as BoxProps<C>;
  return <Box className={`${className}`} ref={ref} as={as} {...typesRest} />;
}) as <C extends ElementType = "div">(props: BoxProps<C> & { ref?: BoxRef<C> }) => JSX.Element;
