import { type ElementType, forwardRef } from "react";
import { Box, type BoxRef } from "./Box";
import type { BoxProps } from "./Box";
import { isString } from "./internal/isString";

type RowProps = {
  left?: React.ReactNode;
  children?: React.ReactNode;
  right?: React.ReactNode;
};

export const Row = forwardRef(function Row<C extends ElementType = "li">(
  { as, className, left, children, right, ...rest }: BoxProps<C> & RowProps,
  ref?: BoxRef<C>,
) {
  const typesRest = rest as BoxProps<C>;
  return (
    <Box
      className={` flex w-full justify-between items-center ${className}`}
      ref={ref}
      as={as}
      {...typesRest}
    >
      {isString(left) ? <div>{left}</div> : left}
      <div className=" w-full text-left flex-grow">{children}</div>
      {isString(right) ? <div>{right}</div> : right}
    </Box>
  );
}) as <C extends ElementType = "li">(
  props: BoxProps<C> & RowProps & { ref?: BoxRef<C> },
) => JSX.Element;
