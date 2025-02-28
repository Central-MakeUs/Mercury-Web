import { http } from "@repo/http";
import { queryOptions } from "@tanstack/react-query";

export const activitiesQueryKeys = {
  all: () => ["activity"],
  userActivity: () => [...activitiesQueryKeys.all(), "user"],
};

export const todayHabitQueryKeys = {
  all: () => ["todayHabit"],
  byDate: (date: string) => [...todayHabitQueryKeys.all(), date],
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
  nickname: "Guest",
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
    console.error("마이페이지 조회를 실패했습니다.", error);
    return defaultActivity;
  }
};

export const useGetUserActivityQueryOptions = () => {
  return queryOptions({
    queryKey: activitiesQueryKeys.userActivity(),
    queryFn: getUserActivity,
  });
};

interface TodayHabit {
  habitHistoryID: number;
  day: string;
  streakCount: number;
  acquiredExp: number;
  hasRecord: boolean;
  hasTimer: boolean;
}

const defaultTodayHabit: TodayHabit = {
  habitHistoryID: 0,
  day: "MONDAY",
  streakCount: 0,
  acquiredExp: 0,
  hasRecord: false,
  hasTimer: false,
};

const getTodayHabit = async (date: string): Promise<TodayHabit> => {
  try {
    const response = await http.get<TodayHabit>(`/my-page/history?date=${date}`);
    return response?.data ?? defaultTodayHabit;
  } catch (error) {
    console.error("오늘 유저의 습관확인에 실패했습니다.", error);
    return defaultTodayHabit;
  }
};

export const useGetTodayHabitQueryOptions = (date: string) => {
  return queryOptions({
    queryKey: todayHabitQueryKeys.byDate(date),
    queryFn: () => getTodayHabit(date),
    enabled: !!date.trim(),
  });
};
