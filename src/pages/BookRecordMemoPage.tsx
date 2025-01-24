import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getMemos } from "~/entities/record/api/getBookMemos";
import { BookRecordMemo } from "~/features/bookRecordDetail/BookRecordMemo";

export default function BookRecordMemoPage() {
  const cheeringMessage = "얼마 안남았네요, 마무리 해보죠!";

  const userId = localStorage.getItem("@mercury_test_user_id_W") || "2";
  const { recordId } = useParams<{ recordId: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["getMemos", userId, recordId],
    queryFn: () => getMemos({ userId, recordId: recordId as string }),
  });

  if (!recordId) {
    return <p>통신에 실패했습니다.</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (data) {
    return (
      <Stack>
        <BookRecordMemo
          author={data.book.author}
          publisher={data.book.publisher}
          title={data.book.title}
          gauge={data.updatedGauge}
          cheeringMessage={cheeringMessage}
          memos={data.memos}
          coverImageUrl={data.book.coverImageUrl}
        />
        <Spacing className="h-[80px]" />
      </Stack>
    );
  }
}
