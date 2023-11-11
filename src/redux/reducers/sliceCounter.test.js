import sliceCounterReducer, { decrement, increment } from "./sliceCounter";
describe("sliceCounter", () => {
	test("increment", () => {
		expect(sliceCounterReducer({ value: 10 }, increment(3))).toEqual({
			value: 13,
		});
	});
	test("decrement", () => {
		expect(sliceCounterReducer({ value: 10 }, decrement(2))).toEqual({
			value: 8,
		});
	});
	test(" with empty stat", () => {
		expect(sliceCounterReducer(undefined, increment())).toEqual({ value: 1 });
		expect(sliceCounterReducer(undefined, decrement())).toEqual({ value: -1 });
	});
});
