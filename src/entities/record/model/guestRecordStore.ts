import { LocalStorageService } from "@repo/storage/localStorageService";
import type { BookRecordDetail } from "./record.model";

const GUEST_MEMO_STORE_KEY = "@mercury_guest_record_store";

export const guestRecordStore = {
  getItem: () => {
    return LocalStorageService.getItem<BookRecordDetail[]>(GUEST_MEMO_STORE_KEY) ?? [];
  },
  setItem: (memoList: BookRecordDetail[]) => {
    LocalStorageService.setItem(GUEST_MEMO_STORE_KEY, memoList);
  },
};
