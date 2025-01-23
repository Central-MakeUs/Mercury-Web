import { Text, textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { Box } from "@repo/ui/Box";
import { Stack } from "@repo/ui/Stack";
import { usePreservedCallback } from "@xionwcfm/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Dialog } from "./Dialog";
import { DialogMenu } from "./DialogMenu";

interface RecordedBookMemoProps {
  updateAt: string;
  contents: string;
  memoId: number;
}

function formatDate(isoString: string): string {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
}

const useLongPress = (onLongPress: () => void, delay = 500) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [_isPressing, setIsPressing] = useState(false);

  const preservedOnLongPress = usePreservedCallback(onLongPress);

  const startPress = useCallback(() => {
    setIsPressing(true);
    timeoutRef.current = setTimeout(() => {
      preservedOnLongPress();
    }, delay);
  }, [delay, preservedOnLongPress]);

  const stopPress = useCallback(() => {
    setIsPressing(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  return {
    onPointerDown: startPress,
    onPointerUp: stopPress,
    onPointerLeave: stopPress,
  };
};

export const RecordedBookMemo = ({ updateAt, contents, memoId }: RecordedBookMemoProps) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [triangleMarginTop, setTriangleMarginTop] = useState("mt-[13px]");
  const [isOpen, setIsOpen] = useState(false);

  const longPressEvent = useLongPress(() => setIsOpen(true), 700);

  useEffect(() => {
    if (boxRef.current) {
      const boxHeight = boxRef.current.clientHeight;
      setTriangleMarginTop(boxHeight < 44 ? "mt-[8px]" : "mt-[13px]");
    }
  }, [contents]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Stack>
        <Text variant={"body/13_r"} className="text-gray-600">
          {formatDate(updateAt)}
        </Text>

        <button className="flex items-start mt-[7px] pl-[8px] w-full text-left" {...longPressEvent}>
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
        </button>
      </Stack>

      <Dialog.Portal>
        <Dialog.Overlay />
        <DialogMenu memoId={memoId} />
      </Dialog.Portal>
    </Dialog.Root>
  );
};
