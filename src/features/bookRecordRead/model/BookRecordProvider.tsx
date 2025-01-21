import { createSafeContext } from "@xionwcfm/react";
import { type PropsWithChildren, useState } from "react";
import { type StoreApi, createStore, useStore } from "zustand";
import { BOOK_RECORD_SORT_TYPES, type BookRecordSortType } from "./bookRecord.model";

interface BookRecordStoreState {
  search: string;
  sortType: BookRecordSortType;
}

type BookRecordStoreActions = {
  actions: {
    setSearch: (search: string) => void;
    setSortType: (sortOption: BookRecordSortType) => void;
  };
};

type BookRecordStore = StoreApi<BookRecordStoreState & BookRecordStoreActions>;

const [StoreContext, useStoreContext] = createSafeContext<BookRecordStore>(null);

export const BookRecordProvider = (
  props: PropsWithChildren<{ search?: string; sortType?: BookRecordSortType }>,
) => {
  const [store] = useState(() =>
    createStore<BookRecordStoreState & BookRecordStoreActions>((set) => ({
      search: props.search ?? "",
      sortType: props.sortType ?? BOOK_RECORD_SORT_TYPES.CREATED_AT.value,
      actions: {
        setSearch: (search: string) => set({ search }),
        setSortType: (sortOption: BookRecordSortType) => set({ sortType: sortOption }),
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
