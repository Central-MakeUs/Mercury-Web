import type { Meta, StoryObj } from "@storybook/react";
import { CtaButton } from "./CtaButton";
const meta: Meta = {
  title: "ds/CtaButton",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <>
        <CtaButton>텍스트</CtaButton>
      </>
    );
  },
};

export const Disabled: StoryObj = {
  render: () => {
    return (
      <>
        <CtaButton disabled={true}>텍스트</CtaButton>
      </>
    );
  },
};
