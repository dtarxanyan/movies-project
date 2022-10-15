import React, { Component } from "react";
import BirthdayInput from "./BirthdayInput/BirthdayInput";
import GenderInput from "./GenderInput/GenderInput";
import TextInput from "../TextInput/TextInput";

class SignUp extends Component {
	constructor(props) {
		super(props);
		const { firstName, lastName, mobile, password } = props.defaultValues;
		this.state = {
			firstName,
			lastName,
			mobile,
			password,
		};
	}

	handleChange = (value, property) => {
		this.setState({
			[property]: value,
		});
	};
	render() {
		const { firstName, lastName, mobile, password } = this.state;
		return (
			<div>
				<form action="">
					<div className={"firstname-lastname"}>
						<TextInput
							property={"firstName"}
							onChange={this.handleChange}
							value={firstName}
							placeholder={"First name"}
						/>
						<TextInput
							property={"lastName"}
							onChange={this.handleChange}
							value={lastName}
							placeholder={"Last name"}
						/>
					</div>
					<br />
					<TextInput
						property={"mobile"}
						onChange={this.handleChange}
						value={mobile}
						placeholder={"Mobile Number or email"}
					/>
					<TextInput
						property={"password"}
						onChange={this.handleChange}
						value={password}
						placeholder={"New password"}
					/>
					<br />
					<br />
					<BirthdayInput />
					<br />
					<GenderInput />
					<br />
					<button
						onClick={(e) => this.props.onSubmit(e, this.state)}
						type={"submit"}
					>
						Sign Up
					</button>
				</form>
			</div>
		);
	}
}

export default SignUp;
