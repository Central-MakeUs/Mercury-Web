import type { Meta, StoryObj } from "@storybook/react";
import { FloatingActionButton } from "./FloatingActionButton";
const meta: Meta = {
  title: "ds/FloatingActionButton",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <>
        <FloatingActionButton />
      </>
    );
  },
};
export const PlusMemo: StoryObj = {
  render: () => {
    return (
      <>
        <FloatingActionButton variant="plus" />
      </>
    );
  },
};
