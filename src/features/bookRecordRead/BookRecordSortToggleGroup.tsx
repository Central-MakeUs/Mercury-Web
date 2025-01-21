import { Flex } from "@repo/ui/Flex";
import { ToggleButtonGroup } from "@repo/ui/ToggleButtonGroup";

import { BookRecordToggleButton } from "~/features/bookRecordRead/components/BookRecordToggleButton";
import { useBookRecordStore } from "~/features/bookRecordRead/model/BookRecordProvider";
import { isBookRecordSortOption } from "~/features/bookRecordRead/model/bookRecord.model";
import { BOOK_RECORD_SORT_OPTIONS } from "~/features/bookRecordRead/model/bookRecord.model";

export const BookRecordSortToggleGroup = () => {
  const sortOption = useBookRecordStore((store) => store.sortOption);
  const actions = useBookRecordStore((store) => store.actions);

  const handleChange = (value: unknown) => {
    if (isBookRecordSortOption(value)) {
      actions.setSortOption(value);
    }
  };
  return (
    <Flex className=" gap-x-[18px]">
      <ToggleButtonGroup value={sortOption} onChange={handleChange}>
        <BookRecordToggleButton value={BOOK_RECORD_SORT_OPTIONS.CREATED_AT.value}>
          {BOOK_RECORD_SORT_OPTIONS.CREATED_AT.label}
        </BookRecordToggleButton>
      </ToggleButtonGroup>
    </Flex>
  );
};
