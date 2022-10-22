import React from "react";
import { useState } from "react";

export default function Input(props) {
	const [value, setValue] = useState(props.defaultValue);

	const handleChange = (e) => {
        setValue(e.target.value);
		props.onChange()

	};
	return (
		<div className={props.className}>
			<label htmlFor={props.className}>{props.label} : </label>

			<input
                className={props.className}
                type = {props.type}
				id = {props.id}
                name = {props.name}
				value={value}
				placeholder={props.placeholder}
				onChange={(e) => handleChange(e)}
			/>
		</div>
	);
}
