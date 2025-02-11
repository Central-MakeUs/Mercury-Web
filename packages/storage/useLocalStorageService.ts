import { LocalStorageService } from "./localStorageService";
import { type OmitStorageServiceOptions, useStorageService } from "./useStorageService";
export const useLocalStorageService = <T>(key: string, options: OmitStorageServiceOptions<T>) => {
  const storage = LocalStorageService;
  return useStorageService<T>(key, { ...options, storage });
};
