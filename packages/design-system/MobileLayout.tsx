import { MAX_WIDTH } from "@repo/token";
import { type PropsWithChildren, useMemo } from "react";

export const MobileLayout = (props: PropsWithChildren<{ maxWidth?: string }>) => {
  const style = useMemo(() => {
    return {
      maxWidth: props.maxWidth ?? MAX_WIDTH,
    };
  }, [props.maxWidth]);

  return (
    <div className=" flex flex-col min-h-screen items-center min-w-max bg-gray-100">
      <div className={`flex min-h-screen bg-gray-white w-[100vw]`} style={style}>
        {props.children}
      </div>
    </div>
  );
};
