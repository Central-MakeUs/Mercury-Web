import type { Meta, StoryObj } from "@storybook/react";
import BookRecordEditMemo from "../bookRecordDetail/BookRecordEditMemo";
import BookRecordWriteTextStep from "./BookRecordWriteTextStep";

const meta: Meta = {
  title: "BookRecordWrite/BookRecordWriteText",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    return <BookRecordWriteTextStep onNext={() => {}} />;
  },
};
export const Edit: StoryObj = {
  render: () => {
    return <BookRecordEditMemo />;
  },
};
