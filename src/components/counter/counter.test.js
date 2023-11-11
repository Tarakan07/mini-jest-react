import { fireEvent, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

import { renderWithRedux } from "../../tests/renderWithRedux";
describe("counter", () => {
	test("change count", async () => {
		renderWithRedux(<Counter />);
		const btnInc = screen.getByTestId("btn_inc");

		expect(screen.getByTestId("h4_value")).toHaveTextContent("Value:0");
		await userEvent.click(btnInc);
		expect(screen.getByTestId("h4_value")).toHaveTextContent("Value:1");
	});
	test("change count with input", async () => {
		renderWithRedux(<Counter />);
		const btnInc = screen.getByTestId("btn_inc");
		// const inputNumber = screen.getByTestId("input_number");

		expect(screen.getByTestId("h4_value")).toHaveTextContent("Value:0");
		fireEvent.change(screen.getByTestId("input_number"), {
			target: { value: 5 },
		});
		await userEvent.click(btnInc);
		expect(screen.getByTestId("h4_value")).toHaveTextContent("Value:5");
	});
});
