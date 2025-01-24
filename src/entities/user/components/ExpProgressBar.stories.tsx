import { Stack } from "@repo/ui/Stack";
import type { Meta, StoryObj } from "@storybook/react";
import { ExpProgressBar } from "./ExpProgressBar";

const meta: Meta = {
  title: "user/ExpProgressBar",
  tags: ["autodocs"],
};
export default meta;

export const DotCase: StoryObj = {
  render: () => {
    return (
      <Stack className=" w-full ">
        <ExpProgressBar value={50} totalExp={100} currentExp={50} />
      </Stack>
    );
  },
};
