import { useQuery } from "@tanstack/react-query";
import { getMemos } from "~/entities/record/api/getBookMemos";
import { BookRecordMemo } from "~/features/bookRecordDetail/BookRecordMemo";

export default function BookRecordMemoPage() {
  const _writer = "궤도, 송용조";
  const _publish = "페이지2북스";
  const _title = "나의 두 번째 교과서 X 궤도의 다시 만난 과학";
  const _progress = 50;
  const cheeringMessage = "얼마 안남았네요, 마무리 해보죠!";
  const _memos = [
    {
      memoId: 1,
      content: "이것은 메모",
      updatedAt: "2024-01-20T10:00:00",
      recordId: 1,
    },
    {
      memoId: 2,
      content: "이것은 2번째 메모",
      updatedAt: "2024-01-20T10:00:00",
      recordId: 1,
    },
    {
      memoId: 3,
      content: "이것은 2번째 메모",
      updatedAt: "2024-01-20T10:00:00",
      recordId: 1,
    },
    {
      memoId: 4,
      content: "이것은 2번째 메모",
      updatedAt: "2024-01-20T10:00:00",
      recordId: 1,
    },
    {
      memoId: 5,
      content: "이것은 2번째 메모",
      updatedAt: "2024-01-20T10:00:00",
      recordId: 1,
    },
    {
      memoId: 6,
      content: "이것은 2번째 메모",
      updatedAt: "2024-01-20T10:00:00",
      recordId: 1,
    },
  ];

  const userId = "2";
  const recordId = "3";

  const { data, isLoading, error } = useQuery({
    queryKey: ["getMemos", userId, recordId],
    queryFn: () => getMemos({ userId, recordId }),
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data) {
    return (
      <BookRecordMemo
        author={data.book.author}
        publisher={data.book.publisher}
        title={data.book.title}
        gauge={data.updatedGauge}
        cheeringMessage={cheeringMessage}
        memos={data.memos}
        coverImageUrl={data.book.coverImageUrl}
      />
    );
  }
}
