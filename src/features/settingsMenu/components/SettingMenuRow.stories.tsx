import { List } from "@repo/ui/List";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { OnOffToggleButton } from "./OnOffToggleButton";
import { SettingMenuRow } from "./SettingMenuRow";
const meta: Meta = {
  title: "features/SettingMenuRow",
  tags: ["autodocs"],
};
export default meta;

export const SettingList: StoryObj = {
  render: () => {
    const [selected, setSelected] = useState(false);
    return (
      <>
        <List className=" gap-y-[6px] w-full">
          <SettingMenuRow
            onClick={() => setSelected((prev) => !prev)}
            right={<OnOffToggleButton selected={selected} />}
          >
            알림설정
          </SettingMenuRow>
          <SettingMenuRow>문의하기</SettingMenuRow>
          <SettingMenuRow>이용약관 및 개인정보 처리방침</SettingMenuRow>
          <SettingMenuRow className=" text-gray-400">로그아웃</SettingMenuRow>
          <SettingMenuRow className=" text-gray-400">탈퇴하기</SettingMenuRow>
        </List>
      </>
    );
  },
};
