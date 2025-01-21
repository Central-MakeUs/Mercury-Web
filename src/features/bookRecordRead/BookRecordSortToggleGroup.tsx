import { Flex } from "@repo/ui/Flex";
import { ToggleButtonGroup } from "@repo/ui/ToggleButtonGroup";

import { BookRecordToggleButton } from "~/features/bookRecordRead/components/BookRecordToggleButton";
import { useBookRecordStore } from "~/features/bookRecordRead/model/BookRecordProvider";
import { isBookRecordSortType } from "~/features/bookRecordRead/model/bookRecord.model";
import { BOOK_RECORD_SORT_TYPES } from "~/features/bookRecordRead/model/bookRecord.model";

export const BookRecordSortToggleGroup = () => {
  const sortType = useBookRecordStore((store) => store.sortType);
  const actions = useBookRecordStore((store) => store.actions);

  const handleChange = (value: unknown) => {
    if (isBookRecordSortType(value)) {
      actions.setSortType(value);
    }
  };
  return (
    <Flex className=" gap-x-[18px]">
      <ToggleButtonGroup value={sortType} onChange={handleChange}>
        {Object.values(BOOK_RECORD_SORT_TYPES).map((option) => (
          <BookRecordToggleButton value={option.value} key={option.value}>
            {option.label}
          </BookRecordToggleButton>
        ))}
      </ToggleButtonGroup>
    </Flex>
  );
};
