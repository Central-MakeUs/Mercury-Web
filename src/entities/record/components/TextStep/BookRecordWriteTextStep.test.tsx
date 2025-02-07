import { renderWithUser } from "@repo/test-utils";
import { screen } from "@testing-library/react";
import BookRecordWriteTextStep from "./BookRecordWriteTextStep";

describe("BookRecordWriteTextStep를 테스트합니다.", () => {
  const createText = (length: number) => "a".repeat(length);

  const num999Text = createText(999);
  const num1001Text = createText(1001);

  const renderWithSelector = (props?: string) => {
    const mockOnNext = vi.fn();
    const { user } = renderWithUser(
      <BookRecordWriteTextStep
        book={{
          title: "달러구트 꿈 백화점 - 주문하신 꿈은 매진입니다",
          coverImageUrl: "https://image.aladin.co.kr/product/24512/70/cover200/k392630952_2.jpg",
          author: "이미예 지음",
          isbn13: "9791165341909",
          link: "http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=245127051&amp",
          publisher: "문학동네",
        }}
        onNext={mockOnNext}
        content={props}
      />,
    );

    const getNextButton = () => screen.getByTestId("next-button");

    const getLetterCount = () => {
      return screen.getByLabelText("lettercount");
    };

    const getTextArea = () => {
      return screen.getByPlaceholderText("내용을 입력해주세요");
    };

    const getWarningText = () => {
      return screen.queryByText("1000자까지만 입력할 수 있어요");
    };

    return { getNextButton, getLetterCount, getTextArea, user, mockOnNext, getWarningText };
  };

  it("초기값을 받고 글자수를 체크합니다.", () => {
    renderWithSelector("초기값 반영");
    expect(screen.getByText(6)).toBeInTheDocument();
    expect(true).toBe(true);
  });
  it("1000자 미만일때에는 경고문이 나타나지 않으며 CTA는 활성화 됩니다.", () => {
    const result = renderWithSelector("초기값 반영");
    expect(result.getWarningText()).not.toBeInTheDocument();
    expect(result.getNextButton()).toBeEnabled();
  });

  it("1000자 이상일때에는 경고문이 나타나며 CTA는 비활성화 됩니다.", async () => {
    const result = renderWithSelector(num1001Text);
    expect(result.getWarningText()).toBeInTheDocument();
    expect(result.getNextButton()).toBeDisabled();
  });
  it("제출 가능한 상태일때 CTA를 누르면 onNext가 입력된 글자와 함께 호출됩니다.", async () => {
    const result = renderWithSelector(num999Text);
    await result.user.click(result.getNextButton());
    expect(result.mockOnNext).toHaveBeenCalledWith(num999Text);
  });
});
