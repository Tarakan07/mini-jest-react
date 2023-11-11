import React from "react";
import Input from "./components/input/Input";
import FetchData from "./components/fetchData/Fetch-data";
import { Provider } from "react-redux";
import { CreateReduxStore } from "./redux/store";
import Counter from "./components/counter/Counter";
const App = () => {
	return (
		<Provider store={CreateReduxStore()}>
			<div>
				<Input />
				<p>---------------------</p>
				<FetchData />
				<p>---------------------</p>
				<Counter />
			</div>
		</Provider>
	);
};

export default App;
