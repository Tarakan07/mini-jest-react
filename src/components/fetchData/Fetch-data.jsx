import React, { useCallback, useEffect, useState } from "react";

let dataCars = {
	cars: [
		{ id: 1, title: "BMV" },
		{ id: 2, title: "Honda" },
		{ id: 3, title: "Audi" },
	],
};
export const getData = async () => {
	return await new Promise((resolve) => {
		setTimeout(() => {
			resolve(dataCars);
		}, 1000);
	});
};
const FetchData = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		getData().then((data) => {
			setData(data);
			setLoading(false);
		});
	}, []);
	const removeCar = useCallback((id) => {
		const index = dataCars.cars.findIndex((el) => el.id === id);
		dataCars = {
			cars: [
				...dataCars.cars.slice(0, index),
				...dataCars.cars.slice(index + 1),
			],
		};
		setLoading(true);
		getData().then((data) => {
			setData(data);
			setLoading(false);
		});
	}, []);
	if (loading || !data) {
		return <p>Loading...</p>;
	}
	return (
		<div data-testid="block_cars">
			<ul>
				{data?.cars.map((car) => {
					return (
						<div key={car.id}>
							<li data-testid="car_item">{car.title}</li>
							<button
								data-testid="remove_car"
								onClick={() => setData(() => removeCar(car.id))}
							>
								remove
							</button>
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default FetchData;
