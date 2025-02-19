import type { StorageService } from "@xionwcfm/storage";
import { useEffect, useState } from "react";

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
  const [value, setValue] = useState<T>(options.defaultValue);

  useEffect(() => {
    const value = storage.getItem(key);
    setValue(value as T);
  }, [key, storage]);

  return [value, setValue] as const;
};
