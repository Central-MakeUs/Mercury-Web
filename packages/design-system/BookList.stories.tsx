import type { Meta, StoryObj } from "@storybook/react";
import { BookList } from "./BookList";
import { Text } from "./Text";

const meta: Meta = {
  title: "ds/BookList",
  tags: ["autodocs"],
};
export default meta;

const IMAGE_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTzw38qIlLaZRLNfbJCeDX7EE5QAGQHf-Hw&s";

export const Search: StoryObj = {
  render: () => {
    return (
      <div className="mx-4">
        <BookList
          imageUrl={IMAGE_URL}
          title="나의 두 번째 교과서 X 궤도의 다시 만난 과학"
          onClick={() => alert("책 클릭")}
          content={
            <div className="flex flex-col gap-[4px]">
              <div className="flex gap-[5px]">
                <Text variant={"body/15_m"} className="text-gray-500">
                  저자
                </Text>
                <Text variant={"body/15_m"} className="text-gray-800">
                  궤도, 송용조
                </Text>
              </div>
              <div className="flex gap-[5px]">
                <Text variant={"body/15_m"} className="text-gray-500">
                  출판사
                </Text>
                <Text variant={"body/15_m"} className="text-gray-800">
                  페이지2북스
                </Text>
              </div>
            </div>
          }
        />
      </div>
    );
  },
};

export const MyList: StoryObj = {
  render: () => {
    return (
      <div className="mx-4">
        <BookList
          imageUrl={IMAGE_URL}
          title="나의 두 번째 교과서 X 궤도의 다시 만난 과학"
          onClick={() => alert("책 클릭")}
          content={<div></div>}
        />
      </div>
    );
  },
};
