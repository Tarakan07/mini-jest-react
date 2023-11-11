import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import FetchData, { getData } from "./Fetch-data";

describe("Fetch car tests", () => {
	test("check get data", async () => {
		return getData().then((data) => {
			expect(data).toStrictEqual({
				cars: [
					{ id: 1, title: "BMV" },
					{ id: 2, title: "Honda" },
					{ id: 3, title: "Audi" },
				],
			});
		});
	});
	test("Check render data", async () => {
		render(<FetchData />);
		await waitFor(
			() => {
				expect(screen.getByTestId("block_cars")).toBeInTheDocument();
			},
			{ timeout: 3000 }
		);
		const cars = await screen.findAllByTestId("car_item");
		expect(cars.length).toBe(3);
	});
	test("Check remove", async () => {
		render(<FetchData />);
		await waitFor(
			() => {
				expect(screen.getByTestId("block_cars")).toBeInTheDocument();
			},
			{ timeout: 1100 }
		);
		const btnRemove = await screen.findAllByTestId("remove_car");
		fireEvent.click(btnRemove[0]);
		return getData().then((data) => {
			expect(data.cars.length).toBe(2);
		});
	});
});
