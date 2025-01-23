import type { Meta, StoryObj } from "@storybook/react";
import { NotificationBadge } from "./NotificationBadge";
import { Text } from "./Text";
import { TopNavigation } from "./TopNavigation";

const meta: Meta = {
  title: "ds/NotificationBadge",
  tags: ["autodocs"],
};
export default meta;

export const DotCase: StoryObj = {
  render: () => {
    return (
      <>
        <TopNavigation.Root
          className=" w-full"
          left={<Text>Mercury</Text>}
          right={
            <NotificationBadge.Button>
              <NotificationBadge.Dot />
              <NotificationBadge.Icon />
            </NotificationBadge.Button>
          }
        />
      </>
    );
  },
};

export const IconCase: StoryObj = {
  render: () => {
    return (
      <>
        <TopNavigation.Root
          className=" w-full"
          left={<Text>Mercury</Text>}
          right={
            <NotificationBadge.Button onClick={() => {}}>
              <NotificationBadge.Icon />
            </NotificationBadge.Button>
          }
        />
      </>
    );
  },
};
