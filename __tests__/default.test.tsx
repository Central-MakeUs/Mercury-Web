import { renderWithUser } from "@repo/test-utils.ts";
import { screen } from "@testing-library/react";

describe("Default Test Code", () => {
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("can component mount", async () => {
    const { user } = renderWithUser(
      <div>
        <button>click</button>
      </div>,
    );
    await user.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent("click");
  });
});
