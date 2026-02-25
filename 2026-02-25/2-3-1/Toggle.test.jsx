import { render, screen } from "@testing-library/react";
import Toggle from "./Toggle";
import userEvent from "@testing-library/user-event";

describe("Toggle Button", () => {
  test("초기 상태는 'off'", () => {
    render(<Toggle />);
    expect(screen.getByText("OFF")).toBeInTheDocument();
  });

  test("클릭하면 'ON'", async () => {
    render(<Toggle />);
    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect(screen.getByText("ON")).toBeInTheDocument();
  });

  test("다시 클릭시 'Off'", async () => {
    render(<Toggle />);
    const button = screen.getByRole("button");

    await userEvent.click(button);
    await userEvent.click(button);

    expect(screen.getByText("OFF")).toBeInTheDocument();
  });
});
