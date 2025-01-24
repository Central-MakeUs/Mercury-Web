export const getGaugeMessage = (gauge: number) => {
  if (gauge < 50) {
    return "시작이 반이에요! 화이팅";
  }
  if (gauge < 100) {
    return "얼마 안남았네요, 마무리 해보죠!";
  }

  return "다 읽으셨네요, 대단해요!";
};
