import { TopNavigation } from "@repo/design-system/TopNavigation";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import { useNavigate } from "react-router";
import BookRecordEditMemo from "~/features/bookRecordDetail/BookRecordEditMemo";

export default function BookRecordMemoEditPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Stack className="w-full">
      <TopNavigation.Root left={<TopNavigation.Back onClick={handleBack} />}>
        <TopNavigation.Title>독서기록</TopNavigation.Title>
      </TopNavigation.Root>
      <Spacing className="h-[10px]" />
      <BookRecordEditMemo />
      <Spacing className="h-[70px]" />
    </Stack>
  );
}
