import React from "react";
import { useState } from "react";

export default function Input(props) {
	const [value, setValue] = useState(props.defaultValue);

	return (
		<div className={"text-input"}>
			<label htmlFor={"text-input"}>{props.label} : </label>

			<input
				id={props.id}
				type={"text"}
				value={value}
				placeholder={props.placeholder}
				onChange={(e) => setValue(e.target.value)}
			/>
		</div>
	);
}
