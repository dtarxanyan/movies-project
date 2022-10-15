import React, { Component } from "react";
import BirthdayInput from "./BirthdayInput/BirthdayInput";
import GenderInput from "./GenderInput/GenderInput";
import TextInput from "../TextInput/TextInput";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: { firstName: "", ...props.defaultValues },
    };
  }

  render() {
    return (
      <div>
        <form action="">
          <div className={"firstname-lastname"}>
            <TextInput
              firstName={this.state.values.firstName}
              placeholder={"First name"}
            />
            <TextInput
              lastName={this.state.values.lastName}
              placeholder={"Last name"}
            />
          </div>
          <br />
          <TextInput
            mobileNumber={this.state.values.mobileNumber}
            placeholder={"Mobile Number or email"}
          />
          <TextInput
            password={this.state.values.password}
            placeholder={"New password"}
          />
          <br />
          <br />
          <BirthdayInput />
          <br />
          <GenderInput />
          <br />
          <button type={"submit"}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
