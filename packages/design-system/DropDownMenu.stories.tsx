import { TopNavigation } from "@repo/design-system/TopNavigation";
import { Flex } from "@repo/ui/Flex";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { DropdownMenu } from "./DropDownMenu";

const meta: Meta = {
  title: "ds/DropDown",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    return (
      <DropdownMenu.Root open={isDropDownOpen} onOpenChange={setIsDropDownOpen}>
        <TopNavigation.Root className="w-full max-h-[48px] relative">
          <Flex className="w-full justify-between relative">
            <TopNavigation.Back className="left-0 top-1/2 -translate-y-1/2" />
            <TopNavigation.Title>독서기록</TopNavigation.Title>
            <DropdownMenu.Trigger asChild={true}>
              <TopNavigation.Kebab className="right-0 top-1/2 -translate-y-1/2" />
            </DropdownMenu.Trigger>
          </Flex>
        </TopNavigation.Root>

        <DropdownMenu.Portal>
          <DropdownMenu.Content>
            <DropdownMenu.Item onClick={() => alert("삭제합니다")}>전체 삭제하기</DropdownMenu.Item>
            <DropdownMenu.Item>리뷰 검색하기</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  },
};
