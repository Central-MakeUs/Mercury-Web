import { createSafeContext } from "@xionwcfm/react";
import { type PropsWithChildren, useState } from "react";
import { type StoreApi, createStore, useStore } from "zustand";
import { BOOK_RECORD_SORT_OPTIONS, type BookRecordSortOption } from "./bookRecord.model";

interface BookRecordStoreState {
  search: string;
  sortOption: BookRecordSortOption;
}

type BookRecordStoreActions = {
  actions: {
    setSearch: (search: string) => void;
    setSortOption: (sortOption: BookRecordSortOption) => void;
  };
};

type BookRecordStore = StoreApi<BookRecordStoreState & BookRecordStoreActions>;

const [StoreContext, useStoreContext] = createSafeContext<BookRecordStore>(null);

export const BookRecordProvider = (
  props: PropsWithChildren<{ search?: string; sortOption?: BookRecordSortOption }>,
) => {
  const [store] = useState(() =>
    createStore<BookRecordStoreState & BookRecordStoreActions>((set) => ({
      search: props.search ?? "",
      sortOption: props.sortOption ?? BOOK_RECORD_SORT_OPTIONS.CREATED_AT.value,
      actions: {
        setSearch: (search: string) => set({ search }),
        setSortOption: (sortOption: BookRecordSortOption) => set({ sortOption }),
      },
    })),
  );

  return <StoreContext value={store}>{props.children}</StoreContext>;
};

export const useBookRecordStore = <T,>(
  selector: (state: BookRecordStoreState & BookRecordStoreActions) => T,
): T => {
  const store = useStoreContext();
  return useStore<BookRecordStore, T>(store, selector);
};
