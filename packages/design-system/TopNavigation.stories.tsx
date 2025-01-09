import type { Meta, StoryObj } from "@storybook/react";
import { TopNavigation } from "./TopNavigation";
const meta: Meta = {
  title: "ds/TopNavigation",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <>
        <TopNavigation title="독서기록" />
      </>
    );
  },
};
