import type { PropsWithChildren } from "react";
import { authStore } from "../model/auth.store";

export const NotSigned = (props: PropsWithChildren) => {
  const auth = authStore.useAuth();
  const isLoggedIn = auth.isLoggedIn;

  if (isLoggedIn) {
    return null;
  }

  return props.children;
};
