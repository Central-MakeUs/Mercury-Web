import { Text } from "./Text";

interface BookListInfoProps {
  author: string;
  publisher: string;
}

export const BookListInfo = ({ author, publisher }: BookListInfoProps) => {
  return (
    <div className="flex flex-col gap-[4px]">
      <div className="flex gap-[5px]">
        <Text variant={"body/15_m"} className="text-gray-500">
          저자
        </Text>
        <Text variant={"body/15_m"} className="text-gray-800">
          {author}
        </Text>
      </div>
      <div className="flex gap-[5px]">
        <Text variant={"body/15_m"} className="text-gray-500">
          출판사
        </Text>
        <Text variant={"body/15_m"} className="text-gray-800">
          {publisher}
        </Text>
      </div>
    </div>
  );
};
