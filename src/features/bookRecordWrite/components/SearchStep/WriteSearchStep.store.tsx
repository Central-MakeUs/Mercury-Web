import { createSafeContext } from "@xionwcfm/react";
import { type PropsWithChildren, useState } from "react";
import { type StoreApi, createStore, useStore } from "zustand";
import {
  GET_BOOKS_SEARCH_SORT_TYPE,
  type GetBooksSearchSortType,
} from "~/entities/record/api/getBooksSearch";

interface BookRecordSearchState {
  query: string;
  maxResults: number;
  startPage: number;
  sortType: GetBooksSearchSortType;
}

interface BookRecordSearchAction {
  actions: {
    setQuery: (query: string) => void;
    setSortType: (sortType: GetBooksSearchSortType) => void;
  };
}

type BookRecordSearchStore = StoreApi<BookRecordSearchState & BookRecordSearchAction>;

const [StoreContext, useStoreContext] = createSafeContext<BookRecordSearchStore>(null);

export const WriteSearchProvider = (props: PropsWithChildren<Partial<BookRecordSearchState>>) => {
  const [store] = useState(() =>
    createStore<BookRecordSearchState & BookRecordSearchAction>((set) => ({
      query: props.query ?? "",
      maxResults: props.maxResults ?? 80,
      startPage: props.startPage ?? 1,
      sortType: props.sortType ?? GET_BOOKS_SEARCH_SORT_TYPE.SALES_POINT.value,
      actions: {
        setQuery: (query: string) => set({ query }),
        setSortType: (sortType: GetBooksSearchSortType) => set({ sortType }),
      },
    })),
  );

  return <StoreContext value={store}>{props.children}</StoreContext>;
};

export const useWriteSearchStore = <T,>(
  selector: (state: BookRecordSearchState & BookRecordSearchAction) => T,
): T => {
  const store = useStoreContext();
  return useStore<BookRecordSearchStore, T>(store, selector);
};
