import { FloatingActionButton } from "@repo/design-system/FloatingActionButton";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { cn } from "@repo/design-system/cn";
import { JustifyEnd } from "@repo/ui/JustifyEnd";

export const BookRecordDetailFloatButton = (props: { className?: string }) => {
  const { className } = props;
  return (
    <MaxWidthBox className={cn(" fixed bottom-0 left-[50%] translate-x-[-50%]", className)}>
      <JustifyEnd className=" pr-[18px] pb-[100px]">
        <FloatingActionButton />
      </JustifyEnd>
    </MaxWidthBox>
  );
};
