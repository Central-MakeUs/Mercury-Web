import { http } from "@repo/http";
import { useCallback } from "react";
import { authStore } from "../model/auth.store";

export const useLogout = () => {
  const logout = useCallback(() => {
    authStore.setAccessToken(null);
    http.post("/signoff/logout");
  }, []);
  return { logout };
};
