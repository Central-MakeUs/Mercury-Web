import { Stack } from "@repo/ui/Stack";
import type { Meta, StoryObj } from "@storybook/react";
import { TimerSpeechBubble } from "./TimerSpeechBubble";

const meta: Meta = {
  title: "Timer/TimerSpeechBubble",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <Stack>
        <TimerSpeechBubble>집중해서 책을 읽어볼까?</TimerSpeechBubble>
        <TimerSpeechBubble>잘 하고 있어요!</TimerSpeechBubble>
        <TimerSpeechBubble>잠시 멈췄어요!</TimerSpeechBubble>
        <TimerSpeechBubble>최고예요!</TimerSpeechBubble>
      </Stack>
    );
  },
};
