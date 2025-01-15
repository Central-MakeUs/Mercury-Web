import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { timePickerBottomSheet } from "./TimePickerBottomSheet";

const meta: Meta = {
  title: "ds/TimePickerBottomSheet",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    const [result, setResult] = useState<{ left: number; right: number } | null>(null);

    return (
      <div>
        <button
          onClick={async () => {
            const response = await timePickerBottomSheet.openAsync(
              timePickerBottomSheet.getMinuteAndSecondProps(),
            );

            setResult(response);
          }}
        >
          열기
        </button>
        <div>{JSON.stringify(result)}</div>
      </div>
    );
  },
};
