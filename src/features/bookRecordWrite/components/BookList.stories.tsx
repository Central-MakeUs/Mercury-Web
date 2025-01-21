import { List } from "@repo/ui/List";
import type { Meta, StoryObj } from "@storybook/react";
import { RecordedBookItem } from "../../bookRecordRead/components/RecordedBookItem";
import { SearchBookItem } from "./SearchBookItem";

const meta: Meta = {
  title: "bookRecord/BookList",
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
      <List className="gap-6 mx-4">
        <SearchBookItem
          imageUrl={IMAGE_URL}
          title="나의 두 번째 교과서 X 궤도의 다시 만난 과학"
          onClick={() => alert("책 클릭")}
          authorName={"궤도, 송용조"}
          publishName={"페이지2북스"}
        />
        <SearchBookItem
          imageUrl={IMAGE_URL}
          title="나의 두 번째 교과서 X 궤도의 다시 만난 과학"
          onClick={() => alert("책 클릭")}
          authorName={"궤도, 송용조"}
          publishName={"페이지2북스"}
        />
      </List>
    );
  },
};

export const MyList: StoryObj = {
  render: () => {
    return (
      <List className="gap-6 mx-4">
        <RecordedBookItem
          imageUrl={IMAGE_URL}
          title="나의 두 번째 교과서 X 궤도의 다시 만난 과학"
          onClick={() => alert("책 클릭")}
          updatedAt={"2025.01.25"}
          bookSummary={BOOKLIST_CONTENT}
          gauge={100}
        />
        <RecordedBookItem
          imageUrl={IMAGE_URL}
          title="나의 두 번째 교과서 X 궤도의 다시 만난 과학"
          onClick={() => alert("책 클릭")}
          updatedAt={"2025.01.25"}
          bookSummary={BOOKLIST_CONTENT}
          gauge={100}
        />
      </List>
    );
  },
};
