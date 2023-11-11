import { configureStore, combineReducers } from "@reduxjs/toolkit";
import sliceCounterReducer from "./reducers/sliceCounter";
const rootReducer = combineReducers({
	counter: sliceCounterReducer,
});

export const CreateReduxStore = (initialState = {}) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
	});
};
