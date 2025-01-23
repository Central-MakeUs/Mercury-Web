import type { Meta, StoryObj } from "@storybook/react";
import { BookRecordMemo } from "./BookRecordMemo";

const meta: Meta = {
  title: "BookRecordWrite/BookRecordMemo",
  tags: ["autodocs"],
};
export default meta;
const writer = "궤도, 송용조";
const publish = "페이지2북스";
const title = "나의 두 번째 교과서 X 궤도의 다시 만난 과학";
const progress = 50;
const cheeringMessage = "얼마 안남았네요, 마무리 해보죠!";
const memos = [
  {
    memoId: 1,
    content: "이것은 메모",
    updatedAt: "2024-01-20T10:00:00",
    recordId: 1,
  },
  {
    memoId: 2,
    content: "이것은 2번째 메모",
    updatedAt: "2024-01-20T10:00:00",
    recordId: 1,
  },
];

export const Default: StoryObj = {
  render: () => {
    return (
      <BookRecordMemo
        writer={writer}
        publish={publish}
        title={title}
        progress={progress}
        cheeringMessage={cheeringMessage}
        memos={memos}
      />
    );
  },
};
