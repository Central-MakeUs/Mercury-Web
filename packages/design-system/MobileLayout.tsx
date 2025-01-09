import { MAX_WIDTH } from "@repo/token";
import { createSafeContext } from "@xionwcfm/react";
import { type PropsWithChildren, useMemo } from "react";

const [MaxWidthProvider, useMaxWidth] = createSafeContext<string>(MAX_WIDTH);

export { useMaxWidth };

export const MobileLayout = (props: PropsWithChildren<{ maxWidth?: string }>) => {
  const style = useMemo(() => {
    return {
      maxWidth: props.maxWidth ?? MAX_WIDTH,
    };
  }, [props.maxWidth]);

  return (
    <MaxWidthProvider value={style.maxWidth}>
      <div className=" flex flex-col min-h-screen items-center min-w-max bg-gray-100">
        <div className={`flex min-h-screen bg-gray-white w-[100vw]`} style={style}>
          {props.children}
        </div>
      </div>
    </MaxWidthProvider>
  );
};
