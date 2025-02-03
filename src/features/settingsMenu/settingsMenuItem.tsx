import { Text, textVariants } from "@repo/design-system/Text";
import { cn } from "@repo/design-system/cn";
import { Flex } from "@repo/ui/Flex";
import { useState } from "react";
import { useNavigate } from "react-router";
import { openExternalUrl } from "~/shared/utils/openExternalUrl";

interface SettingMenuItemProps {
  type: "toggle" | "exit" | "link";
  menuName: string;
  onClick?: () => void;
  link?: string;
  defaultValue?: boolean;
}

export const SettingMenuItem = ({
  type,
  menuName,
  onClick,
  link,
  defaultValue,
}: SettingMenuItemProps) => {
  const _router = useNavigate();
  const [isOn, setIsOn] = useState(defaultValue || false);
  const [_isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (type === "toggle") {
      setIsOn(!isOn);
    } else if (type === "exit") {
      setIsModalOpen(true);
    } else if (type === "link" && link) {
      openExternalUrl(link);
    }
  };

  return (
    <Flex className="py-4 flex justify-between items-center cursor-pointer" onClick={handleClick}>
      <Text
        variant="body/16_sb"
        className={cn(type === "exit" ? "text-gray-400" : "text-gray-800")}
      >
        {menuName}
      </Text>
      {type === "toggle" && (
        <button
          onClick={handleClick}
          className={cn(
            textVariants({ variant: "body/16_sb" }),
            isOn ? "text-green" : "text-gray-500",
          )}
        >
          {isOn ? "ON" : "OFF"}
        </button>
      )}
    </Flex>
  );
};
