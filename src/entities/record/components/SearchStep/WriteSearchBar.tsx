import { SearchBar } from "@repo/design-system/SearchBar";
import { MagnifyIcon } from "@repo/icon/MagnifyIcon";
import { useDebouncedInputValue } from "@xionwcfm/react";
import { useEffect } from "react";
import { useWriteSearchStore } from "./WriteSearchStep.store";

export const WriteSearchBar = () => {
  const storeValue = useWriteSearchStore((state) => state.query);
  const setQuery = useWriteSearchStore((state) => state.actions.setQuery);
  const debouncing = useDebouncedInputValue(storeValue, { delay: 2000 });

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setQuery(debouncing.debouncedValue);
  }, [debouncing.debouncedValue]);

  return (
    <SearchBar
      value={debouncing.value}
      onChange={(e) => debouncing.onChange(e.target.value)}
      left={<MagnifyIcon />}
      placeholder="책 제목을 검색해주세요"
    />
  );
};
