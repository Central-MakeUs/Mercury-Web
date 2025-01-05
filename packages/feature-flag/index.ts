import { env } from "@repo/env";

export const useFeatureFlag = (_flag: string) => {
  return true;
};

export const useFeatureDevOnly = () => {
  return env.DEV;
};
