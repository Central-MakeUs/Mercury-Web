import { LocalStorageService } from "@repo/storage/localStorageService";
import { queryOptions } from "@tanstack/react-query";
import { authStore } from "../model/auth.store";
import type { User } from "../model/user.model";

export const userQueryKeys = {
  all: () => ["user"],
};

const USER_STORAGE_KEY = "@mercury_user";

const defaultUser: User = {
  email: "mercury@gmail.com",
  exp: 0,
  id: (Math.random() * 1000000).toString(),
  nickname: "guest",
};

export const guestUserStore = {
  getItem: () => {
    const user = LocalStorageService.getItem<User>(USER_STORAGE_KEY);
    if (!user) {
      LocalStorageService.setItem(USER_STORAGE_KEY, defaultUser);
    }
    return user;
  },
  setItem: (user: User) => {
    LocalStorageService.setItem(USER_STORAGE_KEY, user);
  },
};

export const useGetUserQueryOptions = () => {
  const _auth = authStore.useAuth();
  return queryOptions({
    queryKey: userQueryKeys.all(),
    queryFn: () => {
      return guestUserStore.getItem();
    },
  });
};
