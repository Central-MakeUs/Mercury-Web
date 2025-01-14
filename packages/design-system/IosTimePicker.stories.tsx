import type { Meta, StoryObj } from "@storybook/react";
import { IosTimePicker } from "./IosTimePicker";

const meta: Meta = {
  title: "ds/IosTimePicker",
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <div className="embla">
        <IosTimePicker slideCount={24} perspective="left" label="hour" />
        <IosTimePicker slideCount={60} perspective="right" label="min" />
      </div>
    );
  },
};
