import { MaxWidthBox } from "@repo/design-system/MaxWidthBox";
import { SearchBar } from "@repo/design-system/SearchBar";
import { MagnifyIcon } from "@repo/icon/MagnifyIcon";
import { useDebouncedInputValue } from "@xionwcfm/react";
import { useEffect } from "react";
import { useBookRecordStore } from "~/features/bookRecordRead/model/BookRecordProvider";

const DEBOUNCE_DELAY = 500;

export const BookRecordSearchBar = () => {
  const search = useBookRecordStore((store) => store.search);
  const actions = useBookRecordStore((store) => store.actions);
  const debounce = useDebouncedInputValue(search, { delay: DEBOUNCE_DELAY });

  useEffect(() => {
    actions.setSearch(debounce.debouncedValue);
  }, [actions.setSearch, debounce.debouncedValue]);

  return (
    <MaxWidthBox className="w-full pb-[3px]">
      <SearchBar
        left={<MagnifyIcon />}
        value={debounce.value}
        onChange={(e) => debounce.onChange(e.target.value)}
        placeholder="독서기록 검색하기"
      />
    </MaxWidthBox>
  );
};
