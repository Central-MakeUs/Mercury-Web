import { textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { type ComponentPropsWithoutRef, type ReactNode, type Ref, forwardRef } from "react";

export type HabitCalendarStatus = "success" | "fail" | "pending";

const Cell = forwardRef(function Cell(
  props: ComponentPropsWithoutRef<"button"> & { header?: ReactNode; status: HabitCalendarStatus },
  ref: Ref<HTMLButtonElement>,
) {
  const { header, children, className, status, ...rest } = props;
  return (
    <div className={cn(" w-full h-full flex flex-col gap-y-[5px]", className)}>
      {header ?? <div />}
      <button
        data-status={status}
        ref={ref}
        className={cn(
          "  aspect-square rounded-[4px]  text-white",
          " flex items-start justify-start pl-[9px] pt-[4px] ",
          textVariants({ variant: "caption/12_m" }),
          " data-[status=success]:bg-aqua-green",
          " data-[status=fail]:bg-pastel-red",
          " data-[status=pending]:bg-gray-200",
        )}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
});

const Header = (props: ComponentPropsWithoutRef<"div">) => {
  const { children, className, ...rest } = props;
  return (
    <div
      {...rest}
      className={cn(
        "flex w-full justify-center items-center text-[#454C54] ",
        textVariants({ variant: "caption/12_m" }),
        className,
      )}
    >
      {children}
    </div>
  );
};

export const HabitCalendar = {
  Cell,
  Header,
};
