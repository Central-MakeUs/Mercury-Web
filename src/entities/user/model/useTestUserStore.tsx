import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

function generateRandomId(length = 8): string {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

const name = "@mercury_test_user_id";

interface TestUserState {
  userId: string;
}

export const useTestUserStore = create<TestUserState>()(
  persist(
    () => ({
      userId: generateRandomId(),
    }),
    {
      name,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
