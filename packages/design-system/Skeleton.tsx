import type { ComponentPropsWithoutRef } from "react";
import { cn } from "./cn";

export const Skeleton = (props: ComponentPropsWithoutRef<"div">) => {
  const { className, ...rest } = props;
  return <div className={cn(" bg-gray-100 animate-pulse  text-gray-100", className)} {...rest} />;
};
