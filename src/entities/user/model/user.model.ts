export interface User {
  exp: number;
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
