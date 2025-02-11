import type { StorageService } from "@xionwcfm/storage";
import { useSyncExternalStore } from "react";
import { useCallback } from "react";

export interface StorageServiceOptions<T> {
  storage: StorageService;
  defaultValue: T;
}

export type OmitStorageServiceOptions<T> = Omit<StorageServiceOptions<T>, "storage">;

export const useStorageService = <T>(
  key: string,
  options: StorageServiceOptions<T> | StorageServiceOptions<T>,
) => {
  const storage = options.storage;
  const setStorage = useCallback(
    (newValue: T) => {
      window.dispatchEvent(
        new StorageEvent("storage", { key: key, newValue: JSON.stringify(newValue) }),
      );
    },
    [key],
  );

  const getSnapshot = () => storage.getItem(key) ?? options.defaultValue;

  const subscribe = (listener: () => void) => {
    window.addEventListener("storage", listener);
    return () => window.removeEventListener("storage", listener);
  };

  const getServerSnapshot = () => options.defaultValue;

  const store = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) as T;

  return [store, setStorage] as const;
};
