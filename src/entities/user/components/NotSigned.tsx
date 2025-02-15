import type { PropsWithChildren } from "react";
import { authStore } from "../model/auth.store";

export const NotSigned = (props: PropsWithChildren<{ fallback?: React.ReactNode }>) => {
  const auth = authStore.useAuth();
  const isLoggedIn = auth.isLoggedIn;

  if (isLoggedIn) {
    return props.fallback ?? null;
  }

  return props.children;
};
