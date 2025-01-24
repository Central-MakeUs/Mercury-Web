import { EXP_TABLE, calculateUserLevel } from "./user.model";

describe("User.model를 테스트합니다.", () => {
  it("경험치가 1레벨 경험치보다 작으면 1레벨을 반환합니다.", () => {
    const exp = EXP_TABLE[1] - 1;
    const level = calculateUserLevel(exp);
    expect(level).toBe(1);
  });
  it("경험치가 1레벨 경험치보다 크면 2레벨을 반환합니다.", () => {
    const exp = EXP_TABLE[1] + 1;
    const level = calculateUserLevel(exp);
    expect(level).toBe(2);
  });
  it("경험치가 0이면 1레벨을 반환합니다.", () => {
    const exp = 0;
    const level = calculateUserLevel(exp);
    expect(level).toBe(1);
  });
  it("경험치가 9레벨 수준이면 9레벨을 반환합니다.", () => {
    const exp =
      EXP_TABLE[1] +
      EXP_TABLE[2] +
      EXP_TABLE[3] +
      EXP_TABLE[4] +
      EXP_TABLE[5] +
      EXP_TABLE[6] +
      EXP_TABLE[7] +
      EXP_TABLE[8];
    const level = calculateUserLevel(exp);
    expect(level).toBe(9);
  });
  it("경험치가 9레벨 보다 높은 경우 10레벨을 반환합니다.", () => {
    const exp =
      EXP_TABLE[1] +
      EXP_TABLE[2] +
      EXP_TABLE[3] +
      EXP_TABLE[4] +
      EXP_TABLE[5] +
      EXP_TABLE[6] +
      EXP_TABLE[7] +
      EXP_TABLE[8] +
      EXP_TABLE[9];
    const level = calculateUserLevel(exp);
    expect(level).toBe(10);
  });
});
