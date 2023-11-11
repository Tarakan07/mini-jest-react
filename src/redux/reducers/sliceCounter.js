import { createSlice } from "@reduxjs/toolkit";

const sliceCounter = createSlice({
	name: "counter",
	initialState: {
		value: 0,
	},
	reducers: {
		increment: (state, action) => {
			console.log(action.payload);
			state.value += Number(action.payload) || 1;
		},
		decrement: (state, action) => {
			state.value -= Number(action.payload) || 1;
		},
	},
});
const { actions, reducer: sliceCounterReducer } = sliceCounter;

export const { increment, decrement } = actions;
export default sliceCounterReducer;
