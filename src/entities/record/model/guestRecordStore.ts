import { LocalStorageService } from "@repo/storage/localStorageService";
import type { MemoList } from "./memo.model";

const GUEST_MEMO_STORE_KEY = "@mercury_guest_record_store";

export const guestRecordStore = {
  getItem: () => {
    return LocalStorageService.getItem<MemoList[]>(GUEST_MEMO_STORE_KEY) ?? [];
  },
  setItem: (memoList: MemoList[]) => {
    LocalStorageService.setItem(GUEST_MEMO_STORE_KEY, memoList);
  },
};
