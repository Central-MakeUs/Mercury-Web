import { Flex } from "@repo/ui/Flex";
import { ToggleButton } from "@repo/ui/ToggleButton";
import { ToggleButtonGroup } from "@repo/ui/ToggleButtonGroup";
import { useState } from "react";
import { Text } from "./Text";
import { cn } from "./cn";

export const ToggleBar: React.FC = () => {
  const [value, setValue] = useState<string | null>("created");

  return (
    <div className={cn("flex justify-between w-full h-[36px] px-4 items-end")}>
      <Text as="h1" variant="title/24_sb">
        독서기록
      </Text>
      <ToggleButtonGroup
        value={value}
        onChange={(newValue) => {
          setValue(newValue ?? "created");
        }}
        allowToggle={false}
      >
        <Flex className="gap-x-4">
          <ToggleButton
            value="created"
            className={cn("text-gray-300 data-[state=selected]:text-gray-500")}
          >
            생성일 순
          </ToggleButton>

          <ToggleButton
            value="updated"
            className={cn("text-gray-300 data-[state=selected]:text-gray-500")}
          >
            업데이트 순
          </ToggleButton>
        </Flex>
      </ToggleButtonGroup>
    </div>
  );
};
