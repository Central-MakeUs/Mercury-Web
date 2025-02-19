import { LocalStorageService } from "@repo/storage/localStorageService";
import { useLocalStorageService } from "@repo/storage/useLocalStorageService";
import { useCallback } from "react";

export const AUTH_ACCESS_TOKEN_STORAGE_KEY = "@mercury_authentication";
export const AUTH_REFRESH_TOKEN_STORAGE_KEY = "@mercury_refresh_token";

export const authStore = {
  setRefreshToken: (refreshToken: string | null) => {
    LocalStorageService.setItem(AUTH_REFRESH_TOKEN_STORAGE_KEY, refreshToken);
  },

  getRefreshToken: () => {
    return LocalStorageService.getItem(AUTH_REFRESH_TOKEN_STORAGE_KEY);
  },

  setAccessToken: (accessToken: string | null) => {
    LocalStorageService.setItem(AUTH_ACCESS_TOKEN_STORAGE_KEY, accessToken);
  },

  getAccessToken: () => {
    return LocalStorageService.getItem(AUTH_ACCESS_TOKEN_STORAGE_KEY);
  },

  isLoggedIn: () => {
    return authStore.getAccessToken() !== null;
  },

  useAuth: () => {
    const [accessToken, setValue] = useLocalStorageService<null | string>(
      AUTH_ACCESS_TOKEN_STORAGE_KEY,
      {
        defaultValue: null,
      },
    );

    const [refreshToken, _setRefreshToken] = useLocalStorageService<null | string>(
      AUTH_REFRESH_TOKEN_STORAGE_KEY,
      {
        defaultValue: null,
      },
    );

    const isLoggedIn = accessToken !== null;

    const setAccessToken = useCallback(
      (accessToken: string | null) => {
        setValue(accessToken);
      },
      [setValue],
    );

    const setRefreshToken = useCallback(
      (refreshToken: string | null) => {
        _setRefreshToken(refreshToken);
      },
      [_setRefreshToken],
    );

    return {
      isLoggedIn,
      accessToken,
      setAccessToken,
      refreshToken,
      setRefreshToken,
    };
  },
};
