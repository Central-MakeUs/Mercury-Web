import { BookListText } from "./BookListText";

interface BookListInfoProps {
  author: string;
  publisher: string;
}

export const BookListInfo = ({ author, publisher }: BookListInfoProps) => {
  return (
    <div className="flex flex-col gap-[4px]">
      <BookListText category={"저자"} categoryContent={author} />
      <BookListText category={"출판사"} categoryContent={publisher} />
    </div>
  );
};
