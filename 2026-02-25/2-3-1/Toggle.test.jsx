import { render, screen } from "@testing-library/react";
import Toggle from "./Toggle";
import userEvent from "@testing-library/user-event";

describe("Toggle Button", () => {
  test("초기 상태는 'off'", () => {
    render(<Toggle />);
    expect(screen.getByText("OFF")).toBeInTheDocument();
  });
  describe("상태가 'ON'일 때", () => {
    test("클릭하면 'ON'", async () => {
      render(<Toggle />);
      const button = screen.getByRole("button");

      await userEvent.click(button);

      expect(screen.getByText("ON")).toBeInTheDocument();
    });

    test("'ON'일 경우 초록색", async () => {
      render(<Toggle />);
      const button = screen.getByRole("button");

      await userEvent.click(button);

      expect(screen.getByText("ON")).toHaveStyle("color:rgba(34, 197, 94, 0.9)");
    });
  });

  describe("상태가 'OFF'일 때", () => {
    test("다시 클릭시 'OFF'", async () => {
      render(<Toggle />);
      const button = screen.getByRole("button");

      await userEvent.click(button);
      await userEvent.click(button);

      expect(screen.getByText("OFF")).toBeInTheDocument();
    });

    test("'Off'일 경우 회색", async () => {
      render(<Toggle />);
      const button = screen.getByRole("button");

      await userEvent.click(button);
      await userEvent.click(button);

      expect(screen.getByText("OFF")).toHaveStyle("color:rgba(107, 114, 128, 0.9)");
    });
  });
});
