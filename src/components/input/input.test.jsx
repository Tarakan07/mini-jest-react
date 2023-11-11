import { screen, render, fireEvent } from "@testing-library/react";
import Input from "./Input";
import userEvent from "@testing-library/user-event";
test("Test input", async () => {
	render(<Input />);
	const input = screen.queryByTestId("input");
	const btn = screen.queryByTestId("btn");
	const span = screen.queryByTestId("span");
	expect(span).toBeNull();

	userEvent.type(input, "open");
	fireEvent.click(btn);

	expect(screen.getByTestId("span")).toBeInTheDocument();

	expect(screen.getByTestId("span")).toContainHTML("open");
});
