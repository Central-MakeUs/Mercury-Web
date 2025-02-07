import type { Meta, StoryObj } from "@storybook/react";
import { SendActionButton } from "./SendActionButton";
const meta: Meta = {
  title: "ds/SendActionButton",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <>
        <SendActionButton disabled={true} />
      </>
    );
  },
};
export const Disable: StoryObj = {
  render: () => {
    return (
      <>
        <SendActionButton disabled={false} />
      </>
    );
  },
};
