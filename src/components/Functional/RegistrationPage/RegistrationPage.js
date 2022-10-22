import React from "react";
import Input from "../Input/Input";

const RegistrationPage = (props) => {
	return (
		<div>
			<h2>Registration Page</h2>
			<div>
				<form>
					<Input
                        disabled = {props.style.disabledAllInputs}
                        color = {props.style.allInputsColor}
						id="input"
						className="class"
						type="text"
						label="label"
						placeholder="Enter login"
						name="input"
						value=""
					/>
				</form>
			</div>
		</div>
	);
};

export default RegistrationPage;
