import type { Meta, StoryObj } from "@storybook/react";
import BookRecordWriteProgressStep from "./BookRecordWriteProgressStep";

const meta: Meta = {
  title: "BookRecordWrite/ProgressStep",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    return <BookRecordWriteProgressStep onNext={async () => {}} gauge={0} />;
  },
};
