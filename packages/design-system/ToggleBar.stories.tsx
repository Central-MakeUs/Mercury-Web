import type { Meta, StoryObj } from "@storybook/react";
import { ToggleBar } from "./ToggleBar";

const meta: Meta<typeof ToggleBar> = {
  title: "ds/ToggleBar",
  component: ToggleBar,
  tags: ["autodocs"],
  argTypes: {
    onToggle: { action: "onToggle" },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleBar>;

export const Default: Story = {
  render: (args) => <ToggleBar {...args} />,
};
