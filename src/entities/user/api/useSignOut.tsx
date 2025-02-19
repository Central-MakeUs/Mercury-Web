import { http } from "@repo/http";
import { useLoading } from "@xionwcfm/react";
import { useCallback } from "react";
import { authStore } from "../model/auth.store";

export const useSignOut = () => {
  const auth = authStore.useAuth();
  const [isLoading, setIsLoading] = useLoading();

  const signOut = useCallback(async () => {
    const transaction = async () => {
      try {
        await http.post("/signoff/withdraw");
        auth.setAccessToken(null);
        auth.setRefreshToken(null);
        return { success: true };
      } catch (e) {
        return { success: false, error: e };
      }
    };
    await setIsLoading(transaction());
  }, [auth.setAccessToken, auth.setRefreshToken, setIsLoading]);

  return { signOut, isLoading };
};
