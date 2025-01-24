import { Text } from "@repo/design-system/Text";
import { JustifyBetween } from "@repo/ui/JustifyBetween";
import { List } from "@repo/ui/List";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { useSuspenseQuery } from "@tanstack/react-query";
import { format, toDate } from "date-fns";
import { useNavigate, useParams } from "react-router";
import { getRecordsDetailQueryOptions } from "~/entities/record/api/getRecordDetail";
import type { Memo } from "~/entities/record/model/memo.model";
import { getGaugeMessage } from "~/entities/record/model/record.constants";
import { useTestUserQueryOptions } from "~/entities/user/api/getTestUser";
import { BookRecordDetailMemoItem } from "~/features/bookRecordDetail/components/BookRecordDetailMemoItem";
import { TopSection } from "~/features/bookRecordDetail/components/BookRecordDetailTopSection";

export default function BookRecordDetailPage() {
  const _navigate = useNavigate();
  const { recordId } = useParams();

  const { data: user } = useSuspenseQuery(useTestUserQueryOptions());
  const { data: recordDetail } = useSuspenseQuery(
    getRecordsDetailQueryOptions({ userId: user.userId, recordId: recordId! }),
  );

  const { book, updatedGauge, memos } = recordDetail;
  const title = book.title;
  const author = book.author;
  const publisher = book.publisher;
  const src = book.coverImageUrl;
  const gauge = updatedGauge;

  const gaugeMessage = `${gauge}%까지 읽었어요!`;
  const cheeringMessage = getGaugeMessage(gauge);

  return (
    <Stack className=" w-full h-full">
      <TopSection title={title} author={author} publisher={publisher} src={src} />

      <Stack className=" pt-[16px] px-[16px] z-[3] bg-white h-full min-h-screen">
        <JustifyBetween>
          <Text variant={"body/16_m"} className=" text-gray-600">
            {gaugeMessage}
          </Text>
          <Text variant={"body/16_m"} className=" text-pastel-violet">
            {cheeringMessage}
          </Text>
        </JustifyBetween>
        <Spacing className=" h-[16px]" />
        <List className=" w-full   gap-y-4 ">
          {memos.map((memo) => (
            <BookRecordDetailMemoItem key={memo.memoId} {...createRowProps(memo)} />
          ))}
        </List>
      </Stack>
    </Stack>
  );
}

const createRowProps = (props: Pick<Memo, "createdAt" | "content">) => {
  const { createdAt, content } = props;

  try {
    const header = format(toDate(createdAt), "yyyy.MM.dd");
    return { header, children: content };
  } catch (_e) {
    return { header: "유효하지 않은 날짜에요", children: content };
  }
};
