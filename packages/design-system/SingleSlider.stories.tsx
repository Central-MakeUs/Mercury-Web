import { Stack } from "@repo/ui/Stack";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SingleSlider } from "./SingleSlider";

const meta: Meta = {
  title: "ds/Slider",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    return <SingleSlider />;
  },
};

export const Controlled: StoryObj = {
  render: () => {
    const [value, setValue] = useState(0);
    return (
      <Stack className=" w-full h-full">
        {value}
        <SingleSlider value={value} step={1} max={100} onChange={(value) => setValue(value)} />
      </Stack>
    );
  },
};
