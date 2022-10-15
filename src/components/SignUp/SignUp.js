import React, { Component } from "react";
import BirthdayInput from "./BirthdayInput/BirthdayInput";
import GenderInput from "./GenderInput/GenderInput";
import TextInput from "../TextInput/TextInput";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: "Tigran",
      inputLastName: "Petrosyan",
      inputEmail: "tigran@gmail.com",
      inputPassword: "123456",
    };
  }
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.onSubmit(this.state);
          }}
        >
          <div className={"firstname-lastname"}>
            <TextInput
              defaultValue={this.state.inputName}
              placeholder={"First name"}
              onChange={(val) =>
                this.setState({ ...this.state, inputName: val })
              }
            />
            <TextInput
              defaultValue={this.state.inputLastName}
              placeholder={"Last name"}
              onChange={(val) =>
                this.setState({ ...this.state, inputLastName: val })
              }
            />
          </div>
          <br />
          <TextInput
            defaultValue={this.state.inputEmail}
            placeholder={"Mobile Number or email"}
            onChange={(val) =>
              this.setState({ ...this.state, inputEmail: val })
            }
          />
          <TextInput
            defaultValue={this.state.inputPassword}
            placeholder={"New password"}
            onChange={(val) =>
              this.setState({ ...this.state, inputPassword: val })
            }
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
