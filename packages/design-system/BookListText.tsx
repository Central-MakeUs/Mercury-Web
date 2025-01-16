import { Text } from "./Text";

interface BookListTextProps {
  category: string;
  categoryContent: string;
}

export const BookListText = ({ category, categoryContent }: BookListTextProps) => {
  return (
    <div className="flex gap-[5px]">
      <Text variant={"body/15_m"} className="text-gray-500">
        {category}
      </Text>
      <Text variant={"body/15_m"} className="text-gray-800">
        {categoryContent}
      </Text>
    </div>
  );
};
