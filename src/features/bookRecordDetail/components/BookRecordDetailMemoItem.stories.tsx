import { List } from "@repo/ui/List";
import type { Meta, StoryObj } from "@storybook/react";
import { format, toDate } from "date-fns";
import type { Memo } from "~/entities/record/model/memo.model";
import { BookRecordDetailMemoItem } from "./BookRecordDetailMemoItem";
import { memoEditOverlay } from "./MemoEditDialog";

const meta: Meta = {
  title: "memo/MemoItem",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    const createRowProps = (props: Pick<Memo, "createdAt" | "content" | "gauge">) => {
      const { createdAt, content, gauge } = props;

      try {
        const header = format(toDate(createdAt), "yyyy.MM.dd");
        return { header, children: content, gauge };
      } catch (_e) {
        return { header: "유효하지 않은 날짜에요", children: content, gauge: 0 };
      }
    };
    const memos = [
      {
        memoId: "1",
        content: "메모메모메모메모메모메모메모메모메모메모메모메모메모메모메모메모메모메모",
        gauge: 10,
        createdAt: "2025-02-06T16:26:34.008Z",
        updatedAt: "2025-02-06T16:26:34.008Z",
        recordId: 0,
        acquiredExp: 0,
      },
    ];

    return (
      <List className=" w-full ">
        {memos.map((memo) => (
          <BookRecordDetailMemoItem
            key={memo.memoId}
            onPressComplete={async () => {
              memoEditOverlay.openAsync({
                userId: "1",
                recordId: "1",
                memoId: memo.memoId,
              });
            }}
            {...createRowProps(memo)}
          />
        ))}
      </List>
    );
  },
};
