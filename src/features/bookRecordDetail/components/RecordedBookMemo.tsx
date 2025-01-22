import { Text, textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { Box } from "@repo/ui/Box";
import { Flex } from "@repo/ui/Flex";
import { Stack } from "@repo/ui/Stack";
import { useEffect, useRef, useState } from "react";

interface RecordedBookMemoProps {
  updateAt: string;
  contents: string;
}

function formatDate(isoString: string): string {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
}

export const RecordedBookMemo = ({ updateAt, contents }: RecordedBookMemoProps) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [triangleMarginTop, setTriangleMarginTop] = useState("mt-[13px]");

  useEffect(() => {
    if (boxRef.current) {
      const boxHeight = boxRef.current.clientHeight;
      if (boxHeight < 44) {
        setTriangleMarginTop("mt-[8px]");
      } else {
        setTriangleMarginTop("mt-[13px]");
      }
    }
  }, [contents]);

  return (
    <Stack>
      <Text variant={"body/13_r"} className="text-gray-600">
        {formatDate(updateAt)}
      </Text>

      <Flex className="items-start mt-[7px] pl-[8px] w-full">
        <div
          className={cn(
            "translate-x-[1px] w-0 h-0 border-solid border-t-[12px] border-b-[12px] border-r-[13px] border-l-0 border-t-white border-b-white border-r-yellow-green rounded-[3px]",
            triangleMarginTop,
          )}
        ></div>
        <Box
          ref={boxRef}
          className={cn(
            "bg-yellow-green rounded-[12px] py-[10px] px-[11px] text-gray-600 w-full",
            textVariants({ variant: "body/15_r" }),
          )}
        >
          {contents}
        </Box>
      </Flex>
    </Stack>
  );
};
