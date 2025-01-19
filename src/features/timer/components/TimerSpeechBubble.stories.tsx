import { Stack } from "@repo/ui/Stack";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Timer/TimerSpeechBubble",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    return <Stack></Stack>;
  },
};
