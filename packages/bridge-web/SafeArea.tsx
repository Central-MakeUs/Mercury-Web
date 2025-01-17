import { cn } from "@repo/design-system/cn";
import { usePreservedReference } from "@xionwcfm/react";
import { type ComponentPropsWithoutRef, useEffect } from "react";
import { bridge } from ".";

type Edge = "top" | "bottom" | "left" | "right";

export const SafeAreaEffector = () => {
  useEffect(() => {
    (async () => {
      const result = (await bridge?.getInsets?.()) ?? { top: 0, bottom: 0, left: 0, right: 0 };
      document.documentElement.style.setProperty("--safe-area-top", `${result.top}px`);
      document.documentElement.style.setProperty("--safe-area-bottom", `${result.bottom}px`);
      document.documentElement.style.setProperty("--safe-area-left", `${result.left}px`);
      document.documentElement.style.setProperty("--safe-area-right", `${result.right}px`);
    })();
  }, []);

  return null;
};

export const SafeArea = (props: ComponentPropsWithoutRef<"div"> & { edges: Edge[] }) => {
  const { children, className, edges, ...rest } = props;

  const style = usePreservedReference({
    paddingTop: edges.includes("top") ? `var(--safe-area-top)` : undefined,
    paddingBottom: edges.includes("bottom") ? `var(--safe-area-bottom)` : undefined,
    paddingLeft: edges.includes("left") ? `var(--safe-area-left)` : undefined,
    paddingRight: edges.includes("right") ? `var(--safe-area-right)` : undefined,
  });

  return (
    <div className={cn(className)} style={style} {...rest}>
      {children}
    </div>
  );
};
