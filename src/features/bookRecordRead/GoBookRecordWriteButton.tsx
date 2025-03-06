import { FloatingActionButton } from "@repo/design-system/FloatingActionButton";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { cn } from "@repo/design-system/cn";
import { Link } from "react-router";

export const GoBookRecordWriteButton = () => {
  return (
    <MaxWidthBox className={cn(" fixed bottom-[113px] left-[80%] ")}>
      <Link to={"/book-record/write"}>
        <FloatingActionButton />
      </Link>
    </MaxWidthBox>
  );
};
