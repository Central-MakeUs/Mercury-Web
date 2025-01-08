import { Box } from "@repo/ui/Box";
import { createSafeContext } from "@xionwcfm/react";
import { useDraft } from "@xionwcfm/react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useMaxWidth } from "./MobileLayout";
import { cn } from "./cn";

const [BottomNavigationProvider, useBottomNavigationContext] = createSafeContext<{
  value: string;
  onValueChange: (next: string) => void;
}>(null);

type LayoutProps = { open?: boolean } & (
  | { value?: string; onValueChange?: never }
  | { value: string; onValueChange: (next: string) => void }
);

const Root = (props: ComponentPropsWithoutRef<"div"> & LayoutProps) => {
  const { className, children } = props;
  const [_value, _onValueChange] = useDraft(props.value ?? "");
  const [_open, _onOpenChange] = useDraft(props.open ?? true);
  const maxWidth = useMaxWidth();
  const open = props.open ?? _open;

  const value = props.value ?? _value;
  const onValueChange =
    typeof props.onValueChange === "function" ? props.onValueChange : _onValueChange;

  const opacity = open ? 1 : 0;
  const visibility = open ? "visible" : "hidden";
  const translateY = open ? "0px" : "56px";

  return (
    <Box
      className={cn("fixed bottom-0 left-[50%] w-screen translate-x-[-50%]")}
      style={{
        maxWidth: maxWidth,
      }}
    >
      <BottomNavigationProvider value={{ value, onValueChange }}>
        <Box
          as={"nav"}
          className={cn(
            "flex justify-between h-[72px] pt-[16px] pb-[20px] border-t-[2px] border-gray-200 rounded-[16px]",
            " duration-200 transition-all",
            className,
          )}
          style={{
            opacity,
            visibility,
            translate: `0px ${translateY}`,
          }}
        >
          {children}
        </Box>
      </BottomNavigationProvider>
    </Box>
  );
};

type ActionProps = {
  icon?: ReactNode | ((props: { selected: boolean }) => ReactNode);
  value: string;
  onClick?: () => void;
  className?: string;
};

const Action = (props: ActionProps) => {
  const { icon, value, onClick, className } = props;
  const context = useBottomNavigationContext();
  const isSelected = context.value === value;

  return (
    <button
      type="button"
      className={cn(
        "  flex flex-col justify-center items-center w-full h-full",
        " transition-all duration-200 rounded-sm",

        className,
      )}
      onClick={() => {
        context.onValueChange(value);
        onClick?.();
      }}
    >
      <div className={cn(" transition-all duration-200")}>
        {typeof icon === "function" ? icon({ selected: isSelected }) : icon}
      </div>
    </button>
  );
};

export const BottomNavigationBar = {
  Root,
  Action,
};
