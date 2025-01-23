import { NotificationIcon } from "@repo/icon/NotificationIcon";
import { type ComponentPropsWithoutRef, type Ref, forwardRef } from "react";
import { cn } from "./cn";

const Button = forwardRef(function Button(
  props: ComponentPropsWithoutRef<"button">,
  ref: Ref<HTMLButtonElement>,
) {
  const { className, children, ...rest } = props;
  return (
    <button
      ref={ref}
      {...rest}
      className={cn(" flex justify-center items-center relative", className)}
    >
      {children}
    </button>
  );
});

const Dot = (props: ComponentPropsWithoutRef<"div">) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cn(
        "w-[6px] h-[6px]  bg-warning-red rounded-full absolute top-0 right-0",
        className,
      )}
      {...props}
    ></div>
  );
};

const Icon = () => {
  return <NotificationIcon />;
};

export const NotificationBadge = {
  Button,
  Dot,
  Icon,
};
