import type { Meta, StoryObj } from "@storybook/react";
import { RecordedBookMemo } from "./RecordedBookMemo";

const meta: Meta = {
  title: "bookRecord/RecordedBookMemo",
  tags: ["autodocs"],
};
export default meta;

const DATE = "2024-01-20T10:00:00";
const CONTENT =
  "나는야멋쟁이나는야멋쟁이나는야멋쟁이나는야멋쟁이나는야멋쟁이나는야멋쟁이나 나는야 멋쟁이 나는야 멋쟁이 나는야 멋쟁이 나는야 멋쟁이 나는야 멋쟁이 나는야 멋쟁이 나는야 멋쟁이 나는야 멋쟁이 나는야 멋쟁이 나는야 멋쟁이 나는야 멋쟁이 나는야 나는야멋쟁이나는야멋쟁이나는야멋쟁이나는야멋쟁이나는야멋쟁이나는야멋쟁이나 나는야 멋쟁이";
export const Memo: StoryObj = {
  render: () => {
    return <RecordedBookMemo updateAt={DATE} contents={CONTENT} memoId={1} />;
  },
};

const ONE_CONTENT = "한줄이지롱";
export const ShortMemo: StoryObj = {
  render: () => {
    return <RecordedBookMemo updateAt={DATE} contents={ONE_CONTENT} memoId={2} />;
  },
};
