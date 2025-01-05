import { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta = {
  title: "ds/Text",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <>
        <Text className=" text-purple-100">hello</Text>
      </>
    );
  },
};
