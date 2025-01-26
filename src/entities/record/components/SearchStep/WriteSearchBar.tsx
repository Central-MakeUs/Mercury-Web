import { SearchBar } from "@repo/design-system/SearchBar";
import { MagnifyIcon } from "@repo/icon/MagnifyIcon";
import { useDebounce } from "@xionwcfm/react";
import { useState } from "react";
import { useWriteSearchStore } from "./WriteSearchStep.store";

export const WriteSearchBar = () => {
  const storeValue = useWriteSearchStore((state) => state.query);
  const setQuery = useWriteSearchStore((state) => state.actions.setQuery);
  const [value, setvalue] = useState(storeValue);
  const debouncedQuery = useDebounce(setQuery, 2000);

  return (
    <SearchBar
      value={value}
      onChange={(e) => {
        setvalue(e.target.value);
        debouncedQuery(e.target.value);
      }}
      left={<MagnifyIcon />}
      placeholder="책 제목을 검색해주세요"
    />
  );
};
