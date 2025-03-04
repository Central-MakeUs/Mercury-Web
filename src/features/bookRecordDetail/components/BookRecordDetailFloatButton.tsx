import { SafeArea } from "@repo/bridge-web/SafeArea";
import { FloatingActionButton } from "@repo/design-system/FloatingActionButton";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { cn } from "@repo/design-system/cn";
import { useNavigate } from "react-router";

export const BookRecordDetailFloatButton = (props: { className?: string; recordId: string }) => {
  const { className, recordId } = props;
  const navigate = useNavigate();
  return (
    <MaxWidthBox className={cn(" fixed bottom-0 left-[50%] translate-x-[-50%]", className)}>
      <MaxWidthBox className="flex justify-end mb-[94px] pr-[18px]">
        <SafeArea edges={["bottom"]}>
          <div onClick={() => navigate(`/add-memo/${recordId}`, { replace: true })}>
            <FloatingActionButton variant={"plus"} />
          </div>
        </SafeArea>
      </MaxWidthBox>
    </MaxWidthBox>
  );
};
