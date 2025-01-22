import { Text, textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { Box } from "@repo/ui/Box";
import { Flex } from "@repo/ui/Flex";
import { Stack } from "@repo/ui/Stack";

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
  return (
    <Stack>
      <Text variant={"body/13_r"} className="text-gray-600">
        {formatDate(updateAt)}
      </Text>

      <Flex className="items-start mt-[7px] pl-[8px] w-full">
        <div className="w-0 h-0 border-solid border-t-[14px] border-b-[14px] border-r-[13px] border-l-0 border-t-white border-b-white border-r-yellow-green mt-[13px] rounded-[3px]"></div>
        <Box
          className={cn(
            "bg-yellow-green rounded-[12px] py-[10px] px-[11px] text-gray-600 w-full min-h-[66px]",
            textVariants({ variant: "body/15_r" }),
          )}
        >
          {contents}
        </Box>
      </Flex>
    </Stack>
  );
};
