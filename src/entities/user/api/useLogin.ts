import { useCallback } from "react";
import { authStore } from "../model/auth.store";

export const useLogin = () => {
  const login = useCallback(
    (props: { accessToken?: string | null; refreshToken?: string | null }) => {
      const { accessToken, refreshToken } = props;

      authStore.setAccessToken(accessToken ?? null);
      authStore.setRefreshToken(refreshToken ?? null);

      return { success: true } as const;
    },
    [],
  );

  return { login };
};
