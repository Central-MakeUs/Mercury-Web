import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { textVariants } from "./Text";
import { cn } from "./cn";

const meta: Meta = {
  title: "ds/TextArea",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    const form = useForm<{ text: string }>();

    return (
      <div className="w-full mt-[160px] bg-white-yellow py-5 px-4 relative">
        <textarea
          {...form.register("text")}
          placeholder="내용을 입력해주세요"
          wrap="hard"
          required={true}
          className={cn(
            textVariants({ variant: "body/16_m" }),
            "w-full h-full bg-yellow-green py-[9px] px-[15px] rounded-3 text-gray-600 placeholder:gray-400",
          )}
        />
      </div>
    );
  },
};
