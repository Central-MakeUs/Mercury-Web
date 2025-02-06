import { textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { Row } from "@repo/ui/Row";
import type { ReactNode } from "react";

type SettingMenuRowProps = {
  children?: ReactNode;
  right?: ReactNode;
  onClick?: () => void;
  className?: string;
};

export const SettingMenuRow = (props: SettingMenuRowProps) => {
  const { children, right, onClick, className } = props;
  return (
    <Row
      className={cn(
        textVariants({ variant: "body/16_sb" }),
        " cursor-pointer w-full p-[16px] text-gray-800",
        " transition-all duration-300 active:scale-[0.99] active:bg-gray-100 rounded-[4px] ",
        className,
      )}
      right={right}
      onClick={onClick}
    >
      {children}
    </Row>
  );
};
