import type { Meta, StoryObj } from "@storybook/react";
import BookRecordWriteTextStep from "./BookRecordWriteTextStep";

const meta: Meta = {
  title: "BookRecordWrite/BookRecordWriteText",
  tags: ["autodocs"],
};
export default meta;

export const Default: StoryObj = {
  render: () => {
    return (
      <BookRecordWriteTextStep
        onNext={() => {}}
        book={{
          author: "hello",
          coverImageUrl: "https://image.aladin.co.kr/product/24512/70/cover200/k392630952_2.jpg",
          title: "달러구트 꿈 백화점 - 주문하신 꿈은 매진입니다",
          isbn13: "9791165341909",
          link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=245127051&amp",
          publisher: "문학동네",
        }}
      />
    );
  },
};
