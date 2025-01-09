import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
const meta: Meta = {
  title: "ds/Button",
  tags: ["autodocs"],
};
export default meta;

export const Delete: StoryObj = {
  render: () => {
    return (
      <>
        <Button variant="delete">삭제</Button>
      </>
    );
  },
};
export const Stop: StoryObj = {
  render: () => {
    return (
      <>
        <Button variant="warning">일시정지</Button>
      </>
    );
  },
};
export const Restart: StoryObj = {
  render: () => {
    return (
      <>
        <Button variant="primary">계속하기</Button>
      </>
    );
  },
};
