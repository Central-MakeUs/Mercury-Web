import { Link } from "react-router";

import { SafeArea } from "@repo/bridge-web/SafeArea";
import { FloatingActionButton } from "@repo/design-system/FloatingActionButton";
import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { Box } from "@repo/ui/Box";

export const GoBookRecordWriteButton = () => {
  return (
    <Box className=" fixed bottom-0 left-[50%] translate-x-[-50%]">
      <MaxWidthBox className="flex justify-end mb-[94px] pr-[18px]">
        <SafeArea edges={["bottom"]}>
          <Link to={"/book-record/write"}>
            <FloatingActionButton />
          </Link>
        </SafeArea>
      </MaxWidthBox>
    </Box>
  );
};
