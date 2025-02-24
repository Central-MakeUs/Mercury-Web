import { http } from "@repo/http";
import { queryOptions } from "@tanstack/react-query";

export const activitiesQueryKeys = {
  all: () => ["activity"],
  userActivity: () => [...activitiesQueryKeys.all(), "user"],
};

interface WeeklyStreak {
  day: string;
  isSuccess: boolean;
}

interface UserActivity {
  habitID: number;
  joinDays: number;
  nickname: string;
  exp: number;
  streakDays: number;
  weeklyStreak: WeeklyStreak[];
}

const defaultActivity: UserActivity = {
  habitID: 0,
  joinDays: 0,
  nickname: "string",
  exp: 0,
  streakDays: 0,
  weeklyStreak: [
    {
      day: "string",
      isSuccess: false,
    },
  ],
};

const getUserActivity = async (): Promise<UserActivity> => {
  try {
    const response = await http.get<UserActivity>("/my-page");
    return response?.data ?? defaultActivity;
  } catch (error) {
    console.error("Failed to fetch user activity:", error);
    return defaultActivity;
  }
};

export const useGetUserActivityQueryOptions = () => {
  return queryOptions({
    queryKey: activitiesQueryKeys.userActivity(),
    queryFn: getUserActivity,
  });
};
