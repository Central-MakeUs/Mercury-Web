import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";

const meta: Meta = {
  title: "ds/TextArea",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <div className="w-full mt-[160px] bg-white-yellow py-5 px-4">
        <TextArea />
      </div>
    );
  },
};
