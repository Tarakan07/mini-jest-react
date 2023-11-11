import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
	test("empty state", () => {
		expect(getCounterValue({})).toBe(0);
	});
	test("with state", () => {
		expect(getCounterValue({ counter: { value: 20 } })).toBe(20);
	});
});
