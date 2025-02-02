import type { Meta, StoryObj } from "@storybook/react";
import { SettingsBadge } from "./SettingsBadge";
import { Text } from "./Text";
import { TopNavigation } from "./TopNavigation";

const meta: Meta = {
  title: "ds/SettingsBadge",
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
            <SettingsBadge.Button>
              <SettingsBadge.Icon />
            </SettingsBadge.Button>
          }
        />
      </>
    );
  },
};
