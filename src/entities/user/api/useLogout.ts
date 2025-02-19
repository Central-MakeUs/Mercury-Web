import { http } from "@repo/http";
import { useLoading } from "@xionwcfm/react";
import { useCallback } from "react";
import { authStore } from "../model/auth.store";

export const useLogout = () => {
  const [isLoading, setLoading] = useLoading();
  const auth = authStore.useAuth();
  const logout = useCallback(async () => {
    try {
      await setLoading(http.post("/signoff/logout"));
    } catch (error) {
      console.error("로그아웃 실패:", error);
    } finally {
      auth.setAccessToken(null);
      auth.setRefreshToken(null);
    }
  }, [setLoading, auth]);
  return { logout, isLoading };
};
