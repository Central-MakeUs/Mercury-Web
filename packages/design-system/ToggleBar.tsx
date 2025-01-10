import { useState } from "react";
import { Text, textVariants } from "./Text";
import { cn } from "./cn";

interface ToggleBarProps {
  onToggle: (selected: "created" | "updated") => void;
}

export const ToggleBar: React.FC<ToggleBarProps> = ({ onToggle }) => {
  const [selected, setSelected] = useState<"created" | "updated">("created");

  const handleToggle = (option: "created" | "updated") => {
    setSelected(option);
    onToggle(option);
  };

  return (
    <div className={cn("flex justify-between w-full h-[36px] px-4 items-end")}>
      <Text as="h1" variant="title/24_sb">
        독서기록
      </Text>
      <div className="flex gap-[18px]">
        <button
          onClick={() => handleToggle("created")}
          className={cn(
            selected === "created" ? "text-gray-500" : "text-gray-300",
            textVariants({ variant: "body/16_sb" }),
          )}
        >
          생성일 순
        </button>

        <button
          onClick={() => handleToggle("updated")}
          className={cn(
            selected === "updated" ? "text-gray-500" : "text-gray-300",
            textVariants({ variant: "body/16_sb" }),
          )}
        >
          업데이트 순
        </button>
      </div>
    </div>
  );
};
