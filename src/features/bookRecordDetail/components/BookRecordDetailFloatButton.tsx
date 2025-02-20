import { FloatingActionButton } from "@repo/design-system/FloatingActionButton";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { cn } from "@repo/design-system/cn";
import { Link } from "react-router";

export const BookRecordDetailFloatButton = (props: { className?: string; recordId: string }) => {
  const { className, recordId } = props;
  return (
    <MaxWidthBox className={cn(" fixed bottom-0 left-[50%] translate-x-[-50%]", className)}>
      <MaxWidthBox className="flex justify-end mb-[94px] pr-[18px]">
        <Link to={`/add-memo/${recordId}`}>
          <FloatingActionButton variant={"plus"} />
        </Link>
      </MaxWidthBox>
    </MaxWidthBox>
  );
};
