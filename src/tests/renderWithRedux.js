import { Provider } from "react-redux";
import { CreateReduxStore } from "../redux/store";
import { render } from "@testing-library/react";
export const renderWithRedux = (component, initialState) => {
	return render(
		<Provider store={CreateReduxStore(initialState)}>{component}</Provider>
	);
};
