import type { Meta, StoryObj } from "@storybook/react";
import { BookList } from "./BookList";
import { BookListInfo } from "./BookListInfo";
import { BookListProgress } from "./BookListProgress";

const meta: Meta = {
  title: "ds/BookList",
  tags: ["autodocs"],
};
export default meta;

const IMAGE_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTzw38qIlLaZRLNfbJCeDX7EE5QAGQHf-Hw&s";
const BOOKLIST_CONTENT =
  "과학 지식을 알기 쉽게 전달하는 과학 커뮤니케이터이며, 유튜브 과학 채널 유튜브 과학 채널유튜브 과학 채널 유튜브 과학 채널...유튜브 과학 채널...유튜브 과학 채널...유튜브 과학채널...유튜브 과학 채널...유튜브 과학 채널...";

export const Search: StoryObj = {
  render: () => {
    return (
      <div className="mx-4 flex flex-col gap-6">
        <BookList
          imageUrl={IMAGE_URL}
          title="나의 두 번째 교과서 X 궤도의 다시 만난 과학"
          onClick={() => alert("책 클릭")}
          content={<BookListInfo author={"궤도, 송용조"} publisher={"페이지2북스"} />}
        />
        <BookList
          imageUrl={IMAGE_URL}
          title="나의 두 번째 교과서 X 궤도의 다시 만난 과학"
          onClick={() => alert("책 클릭")}
          content={<BookListInfo author={"궤도, 송용조"} publisher={"페이지2북스"} />}
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
          content={<BookListProgress updateDate={"2025.03.02"} bookContent={BOOKLIST_CONTENT} />}
        />
      </div>
    );
  },
};
