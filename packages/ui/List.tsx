import { Children, type ElementType, type ReactNode, forwardRef } from "react";
import { Box, type BoxRef } from "./Box";
import type { BoxProps } from "./Box";
import { Separated } from "./internal/Separated";

type ListProps = {
  fallback?: ReactNode;
  with?: ReactNode;
};

export const List = forwardRef(function List<C extends ElementType = "ul">(
  { as, className, children, fallback, ...rest }: BoxProps<C> & ListProps,
  ref?: BoxRef<C>,
) {
  const typesRest = rest as BoxProps<C>;
  const child = Children.toArray(children);
  const isEmpty = child.length === 0;

  if (isEmpty) {
    return <>{fallback}</>;
  }

  return (
    <Box className={` flex flex-col break-words ${className}`} ref={ref} as={as} {...typesRest}>
      {rest.with ? <Separated with={rest.with}>{children}</Separated> : children}
    </Box>
  );
}) as <C extends ElementType = "ul">(
  props: BoxProps<C> & ListProps & { ref?: BoxRef<C> },
) => JSX.Element;
