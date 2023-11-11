import React, { useState } from "react";
import { increment, decrement } from "../../redux/reducers/sliceCounter";
import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "../../redux/reducers/selectors/getCounterValue/getCounterValue";

const Counter = () => {
	const [number, setNumber] = useState(1);
	const value = useSelector(getCounterValue);

	const dispatch = useDispatch();
	const uSetNumber = (num) => {
		setNumber(num);
	};
	const uIncrement = () => {
		dispatch(increment(number));
	};
	const uDecrement = () => {
		dispatch(decrement(number));
	};
	return (
		<div>
			<h4 data-testid="h4_value">Value:{value}</h4>
			<input
				data-testid="input_number"
				onChange={(e) => uSetNumber(e.target.value)}
				value={number}
				type="number"
			/>
			<button data-testid="btn_inc" onClick={uIncrement}>
				inc
			</button>
			<button data-testid="btn_decr" onClick={uDecrement}>
				decr
			</button>
		</div>
	);
};

export default Counter;
