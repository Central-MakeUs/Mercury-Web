import type { Preview } from "@storybook/react";
import "../src/index.css";
import "../packages/design-system/iosTimePicker.css";

import { MobileLayout } from "@repo/design-system/MobileLayout";
import { cn } from "@repo/design-system/cn";
import { MAX_WIDTH } from "@repo/token";
import { type PropsWithChildren, useState } from "react";

const StoryBookLayout = (props: PropsWithChildren) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className=" fixed top-[0px] translate-y-[50%] right-0 translate-x-[-50%]">
        <button
          onClick={() => setToggle((prev) => !prev)}
          className={cn(
            "  text-gray-white transition-all duration-200",
            " px-2 py-1 rounded-md",
            toggle ? "bg-green" : "bg-pastel-violet",
          )}
        >
          Toggle
        </button>
      </div>
      <MobileLayout maxWidth={toggle ? MAX_WIDTH : "360px"}>{props.children}</MobileLayout>
    </>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <StoryBookLayout>
          <Story />
        </StoryBookLayout>
      );
    },
  ],
};

export default preview;
