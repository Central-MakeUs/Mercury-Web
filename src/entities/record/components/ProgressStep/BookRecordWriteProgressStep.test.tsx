import { renderWithUser, textContentMatcher } from "@repo/test-utils";
import { screen } from "@testing-library/react";
import BookRecordWriteProgressStep from "./BookRecordWriteProgressStep";

const renderWithSelector = (progress: number) => {
  const mockOnNext = vi.fn();
  const { user } = renderWithUser(
    <BookRecordWriteProgressStep gauge={progress} onNext={mockOnNext} />,
  );

  const getByProgressText = (progress: number) => {
    return screen.getByText(textContentMatcher(`${progress}%까지 읽었어요`));
  };

  const getCta = () => {
    return screen.getByRole("button", { name: "다음" });
  };

  const getBySlider = () => {
    return screen.getByRole("slider");
  };

  const getByImage = (value: "0" | "50" | "100") => {
    return screen.getByAltText(`read gauge ${value} image`);
  };

  return { user, mockOnNext, getByProgressText, getCta, getBySlider, getByImage };
};

describe("BookRecordWriteProgressStep를 테스트합니다.", () => {
  it("초기값을 전달 받을 수 있습니다.", () => {
    const { getByProgressText } = renderWithSelector(10);
    expect(getByProgressText(10)).toBeInTheDocument();
  });

  it.each([
    { input: 0, expected: "0" },
    { input: 49, expected: "0" },
    { input: 50, expected: "50" },
    { input: 99, expected: "50" },
    { input: 100, expected: "100" },
  ] as const)("각 이미지는 0, 50, 100을 기준으로 교체됩니다.", ({ input, expected }) => {
    const { getByImage } = renderWithSelector(input);
    expect(getByImage(expected)).toBeInTheDocument();
  });

  it("CTA를 클릭하면 onNext 함수에 현재 Progress 밸류가 전달되며 호출됩니다.", async () => {
    const { user, mockOnNext, getCta, getByProgressText } = renderWithSelector(20);

    await user.click(getCta());
    expect(getByProgressText(20)).toBeInTheDocument();
    expect(mockOnNext).toHaveBeenCalledWith(20);
  });
});
