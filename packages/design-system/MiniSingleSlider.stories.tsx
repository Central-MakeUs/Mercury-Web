import { Stack } from "@repo/ui/Stack";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MiniSingleSlider } from "./MiniSingleSlider";

const meta: Meta = {
  title: "ds/MiniSingleSlider",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    return <MiniSingleSlider value={0} />;
  },
};

export const Controlled: StoryObj = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Stack className=" w-full h-full">
        {value}
        <MiniSingleSlider value={value} step={1} max={100} onChange={(value) => setValue(value)} />
      </Stack>
    );
  },
};
