import { useState } from "react";
import { MaxWidthBox } from "./MaxWidthBox";
import { Text, textVariants } from "./Text";
import { cn } from "./cn";

export const TextArea = () => {
  const [text, setText] = useState("");

  return (
    <MaxWidthBox className="w-full min-h-[343px] relative">
      <textarea
        placeholder="내용을 입력해주세요"
        maxLength={1000}
        wrap="hard"
        required={true}
        onChange={(e) => setText(e.target.value)}
        className={cn(
          textVariants({ variant: "title/16_m" }),
          "w-full h-full min-h-[343px] bg-yellow-green py-[10px] px-[15px] rounded-3 text-gray-600 placeholder:gray-400",
        )}
      />
      <Text
        variant="body/14_m"
        className={cn(
          "absolute bottom-[9px] right-[14px] text-gray-300",
          text.length > 0 && "text-gray-500",
        )}
      >
        {text.length}
      </Text>
    </MaxWidthBox>
  );
};
