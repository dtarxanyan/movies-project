import React from "react";
import SignUp from "./components/SignUp/SignUp";

class App extends React.Component {
	handleSubmit = (e, values) => {
		e.preventDefault();
		console.log(values);
	};

	render() {
		return (
			<SignUp
				onSubmit={this.handleSubmit}
				defaultValues={{
					firstName: "Tiko",
					lastName: "Mnatsakanyan",
					mobile: "044226604",
					password: "tutak",
				}}
			/>
		);
	}
}

export default App;
