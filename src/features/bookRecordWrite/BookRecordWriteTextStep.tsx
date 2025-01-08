import { textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import type { ComponentPropsWithoutRef } from "react";

export interface BookRecordWriteTextStepProps {
  value?: string;
  onNext: (text: string) => void;
}

export default function BookRecordWriteTextStep(_props: BookRecordWriteTextStepProps) {
  return <div>TextStep</div>;
}

const _Cta = (props: ComponentPropsWithoutRef<"button">) => {
  const { disabled, className } = props;
  return (
    <button
      className={cn(textVariants({ variant: "title/20_sb" }), className)}
      aria-disabled={disabled}
      {...props}
    ></button>
  );
};
