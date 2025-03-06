import { FloatingActionButton } from "@repo/design-system/FloatingActionButton";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { cn } from "@repo/design-system/cn";
import { useNavigate } from "react-router";

export const BookRecordDetailFloatButton = (props: { className?: string; recordId: string }) => {
  const { className, recordId } = props;
  const navigate = useNavigate();
  return (
    <MaxWidthBox className={cn(" fixed bottom-[130px] left-[80%] ", className)}>
      <div onClick={() => navigate(`/add-memo/${recordId}`, { replace: true })}>
        <FloatingActionButton variant={"plus"} />
      </div>
    </MaxWidthBox>
  );
};
