import { cn } from "./cn";

import { Box } from "@repo/ui/Box";
import { type ComponentPropsWithoutRef, useMemo } from "react";
import { useMaxWidth } from "./MobileLayout";

export const MaxWidthBox = (props: ComponentPropsWithoutRef<"div">) => {
  const maxWidth = useMaxWidth();
  const style = useMemo(() => {
    return {
      maxWidth: maxWidth,
    };
  }, [maxWidth]);

  return (
    <Box className={cn(" w-screen ", props.className)} style={style}>
      {props.children}
    </Box>
  );
};
