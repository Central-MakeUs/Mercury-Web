import { FloatingActionButton } from "@repo/design-system/FloatingActionButton";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { cn } from "@repo/design-system/cn";
import { JustifyEnd } from "@repo/ui/JustifyEnd";
import { Link } from "react-router";

export const BookRecordDetailFloatButton = (props: { className?: string; recordId: string }) => {
  const { className, recordId } = props;
  return (
    <MaxWidthBox className={cn(" fixed bottom-0 left-[50%] translate-x-[-50%]", className)}>
      <JustifyEnd className=" pr-[18px] pb-[100px]">
        <Link to={`/add-memo/${recordId}`}>
          <FloatingActionButton />
        </Link>
      </JustifyEnd>
    </MaxWidthBox>
  );
};
