import { MagnifyIcon } from "@repo/icon/MagnifyIcon";
import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";

const meta: Meta = {
  title: "ds/SearchBar",
  tags: ["autodocs"],
};
export default meta;

export const WithoutIcon: StoryObj = {
  render: () => {
    return (
      <>
        <SearchBar placeholder="책 제목을 검색해주세요" />
      </>
    );
  },
};

export const WithIcon: StoryObj = {
  render: () => {
    return (
      <>
        <SearchBar placeholder="책 제목을 검색해주세요" left={<MagnifyIcon />} />
      </>
    );
  },
};

export const WithIconAndValue: StoryObj = {
  render: () => {
    return (
      <>
        <SearchBar placeholder="책 제목을 검색해주세요" value={"hello"} left={<MagnifyIcon />} />
      </>
    );
  },
};
