import React, { useState } from "react";

const Input = () => {
	const [value, setValue] = useState("");
	const [toggle, setToggle] = useState(false);

	return (
		<div>
			<p>
				{value === "open" && toggle && <span data-testid="span">{value}</span>}
			</p>
			<button data-testid="btn" onClick={() => setToggle((prev) => !prev)}>
				Lala
			</button>
			<input
				data-testid="input"
				type="text"
				value={value}
				onChange={({ target }) => setValue(target.value)}
			/>
		</div>
	);
};

export default Input;
