interface WeeklyStreak {
  day: string;
  isSuccess: boolean;
}

export interface User {
  id: number | string;
  nickname: string;
  email: string;
  exp: number;
  joinDays?: number;
  streakDays?: number;
  weeklyStreak?: WeeklyStreak[];
}

export const EXP_TABLE = {
  1: 100,
  2: 100,
  3: 100,
  4: 200,
  5: 300,
  6: 500,
  7: 800,
  8: 1300,
  9: 2100,
} as const;

export const calculateUserLevel = (exp: number): number => {
  let accumulatedExp = 0;

  for (const [level, requiredExp] of Object.entries(EXP_TABLE)) {
    accumulatedExp += requiredExp;
    if (exp < accumulatedExp) {
      return Number(level);
    }
  }

  return Object.keys(EXP_TABLE).length + 1;
};

export const getGoalExp = (level: number) => {
  let goalExp = 0;

  for (let i = 1; i <= level; i++) {
    goalExp += EXP_TABLE[i as keyof typeof EXP_TABLE] ?? 0;
  }

  return goalExp;
};

export const getExpPercentage = (exp: number, goalExp: number): number => {
  const result = (exp / goalExp) * 100;
  if (Number.isNaN(result)) {
    return 1;
  }
  return result;
};
