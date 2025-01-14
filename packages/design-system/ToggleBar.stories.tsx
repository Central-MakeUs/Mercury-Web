import type { Meta, StoryObj } from "@storybook/react";
import { ToggleBar } from "./ToggleBar";

const meta: Meta = {
  title: "ds/ToggleBar",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <>
        <ToggleBar />
      </>
    );
  },
};
