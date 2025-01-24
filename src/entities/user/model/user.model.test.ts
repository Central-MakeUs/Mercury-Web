import { EXP_TABLE, calculateUserLevel, getGoalExp } from "./user.model";

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

describe("getGoalExp를 테스트합니다.", () => {
  it("1레벨 경험치 목표는 100입니다.", () => {
    const goalExp = getGoalExp(1);
    expect(goalExp).toBe(EXP_TABLE[1]);
  });
  it("2레벨 경험치 목표는 200입니다.", () => {
    const goalExp = getGoalExp(2);
    expect(goalExp).toBe(EXP_TABLE[1] + EXP_TABLE[2]);
  });
  it("3레벨 경험치 목표는 300입니다.", () => {
    const goalExp = getGoalExp(3);
    expect(goalExp).toBe(EXP_TABLE[1] + EXP_TABLE[2] + EXP_TABLE[3]);
  });
  it("4레벨 경험치 목표는 500입니다.", () => {
    const goalExp = getGoalExp(4);
    expect(goalExp).toBe(EXP_TABLE[1] + EXP_TABLE[2] + EXP_TABLE[3] + EXP_TABLE[4]);
  });
  it("5레벨 경험치 목표는 800입니다.", () => {
    const goalExp = getGoalExp(5);
    expect(goalExp).toBe(EXP_TABLE[1] + EXP_TABLE[2] + EXP_TABLE[3] + EXP_TABLE[4] + EXP_TABLE[5]);
  });
  it("6레벨 경험치 목표는 1300입니다.", () => {
    const goalExp = getGoalExp(6);
    expect(goalExp).toBe(
      EXP_TABLE[1] + EXP_TABLE[2] + EXP_TABLE[3] + EXP_TABLE[4] + EXP_TABLE[5] + EXP_TABLE[6],
    );
  });
  it("7레벨 경험치 목표는 2100입니다.", () => {
    const goalExp = getGoalExp(7);
    expect(goalExp).toBe(
      EXP_TABLE[1] +
        EXP_TABLE[2] +
        EXP_TABLE[3] +
        EXP_TABLE[4] +
        EXP_TABLE[5] +
        EXP_TABLE[6] +
        EXP_TABLE[7],
    );
  });
  it("8레벨 경험치 목표는 3400입니다.", () => {
    const goalExp = getGoalExp(8);
    expect(goalExp).toBe(
      EXP_TABLE[1] +
        EXP_TABLE[2] +
        EXP_TABLE[3] +
        EXP_TABLE[4] +
        EXP_TABLE[5] +
        EXP_TABLE[6] +
        EXP_TABLE[7] +
        EXP_TABLE[8],
    );
  });
  it("9레벨 경험치 목표는 5500입니다.", () => {
    const goalExp = getGoalExp(9);
    expect(goalExp).toBe(
      EXP_TABLE[1] +
        EXP_TABLE[2] +
        EXP_TABLE[3] +
        EXP_TABLE[4] +
        EXP_TABLE[5] +
        EXP_TABLE[6] +
        EXP_TABLE[7] +
        EXP_TABLE[8] +
        EXP_TABLE[9],
    );
  });
  it("10레벨 경험치 목표는 9레벨과 동일합니다.", () => {
    const goalExp = getGoalExp(10);
    expect(goalExp).toBe(
      EXP_TABLE[1] +
        EXP_TABLE[2] +
        EXP_TABLE[3] +
        EXP_TABLE[4] +
        EXP_TABLE[5] +
        EXP_TABLE[6] +
        EXP_TABLE[7] +
        EXP_TABLE[8] +
        EXP_TABLE[9],
    );
  });
});
