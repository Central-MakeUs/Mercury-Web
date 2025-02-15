import { useCallback } from "react";
import { authStore } from "../model/auth.store";

export const useLogin = (props: { accessToken: string }) => {
  const { accessToken } = props;
  const login = useCallback(() => {
    //http post
    authStore.setAccessToken(accessToken);
    return { success: true } as const;
  }, [accessToken]);

  return { login };
};
