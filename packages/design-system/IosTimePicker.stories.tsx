import { Box } from "@repo/ui/Box";
import type { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import { IosTimePicker } from "./IosTimePicker";

const meta: Meta = {
  title: "ds/IosTimePicker",
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => {
    const hour = useRef(0);

    const onHourChange = (value: number) => {
      hour.current = value;
    };

    return (
      <Box className=" w-full">
        <IosTimePicker.Layout>
          <IosTimePicker
            slideCount={24}
            onChange={onHourChange}
            value={hour.current}
            perspective="left"
            label="hour"
          />
          <IosTimePicker slideCount={60} perspective="right" label="min" />
        </IosTimePicker.Layout>
        <button onClick={() => alert(hour.current)}>getValues</button>
      </Box>
    );
  },
};
