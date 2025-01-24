import { Flex } from "@repo/ui/Flex";
import { Spacing } from "@repo/ui/Spacing";
import { Stack } from "@repo/ui/Stack";
import type { Book } from "~/entities/record/model/book.model";
import { WriteSearchBar } from "./WriteSearchBar";
import { WriteSearchList } from "./WriteSearchList";
import { WriteSearchToggleGroup } from "./WriteSearchToggleGroup";

export interface BookRecordWriteSearchStepProps {
  onNext: (book: Book) => void;
}

export default function BookRecordWriteSearchStep(props: BookRecordWriteSearchStepProps) {
  const { onNext } = props;

  return (
    <Stack className=" h-full">
      <Flex className=" px-[16px] mb-[14px]">
        <WriteSearchBar />
      </Flex>
      <WriteSearchToggleGroup />
      <Spacing className=" h-[16px]" />
      <Stack className=" h-full w-full px-[16px]">
        <WriteSearchList onNext={onNext} />
      </Stack>
    </Stack>
  );
}
