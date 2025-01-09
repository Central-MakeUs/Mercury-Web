import { BookIcon } from "@repo/icon/BookIcon";
import { HomeIcon } from "@repo/icon/HomeIcon";
import { IconButton } from "@repo/icon/IconButton";
import { MyIcon } from "@repo/icon/MyIcon";
import { TimerIcon } from "@repo/icon/TimerIcon";
import type { Meta, StoryObj } from "@storybook/react";
import { BottomNavigationBar } from "./BottomNavigationBar";

const meta: Meta = {
  title: "ds/BottomNavigationBar",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <>
        <BottomNavigationBar.Root>
          <BottomNavigationBar.Action
            icon={({ selected }) => (
              <IconButton>
                <HomeIcon selected={selected} />
              </IconButton>
            )}
            value="home"
          />
          <BottomNavigationBar.Action
            icon={({ selected }) => (
              <IconButton>
                <TimerIcon selected={selected} />
              </IconButton>
            )}
            value="timer"
          />
          <BottomNavigationBar.Action
            icon={({ selected }) => (
              <IconButton>
                <BookIcon selected={selected} />
              </IconButton>
            )}
            value="book"
          />
          <BottomNavigationBar.Action
            icon={({ selected }) => (
              <IconButton>
                <MyIcon selected={selected} />
              </IconButton>
            )}
            value="my"
          />
        </BottomNavigationBar.Root>
      </>
    );
  },
};
