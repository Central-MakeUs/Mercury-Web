import { BookListText } from "./BookListText";
import { Text } from "./Text";

type BookListProgressProps = {
  updateDate: string;
  bookContent: string;
};

export const BookListProgress = ({ updateDate, bookContent }: BookListProgressProps) => {
  return (
    <div className="flex flex-col gap-[21px]">
      <div className="flex justify-between">
        <BookListText category={"업데이트"} categoryContent={"2025.03.02"} />
      </div>
      <Text variant={"body/13_r"} className="line-clamp-3 text-gray-400">
        과학 지식을 알기 쉽게 전달하는 과학 커뮤니케이터이며, 유튜브 과학 채널 유튜브 과학 채널
        유튜브 과학 채널 유튜브 과학 채널...유튜브 과학 채널...유튜브 과학 채널...유튜브 과학
        채널...유튜브 과학 채널...유튜브 과학 채널...
      </Text>
    </div>
  );
};
