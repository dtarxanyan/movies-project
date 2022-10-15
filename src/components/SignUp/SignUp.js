import React,{Component} from "react";
import BirthdayInput from "./BirthdayInput/BirthdayInput";
import GenderInput from "./GenderInput/GenderInput";
import TextInput from "../TextInput/TextInput";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.defaultValues.firstName,
      lastName: this.props.defaultValues.lastName,
      mobile: this.props.defaultValues.mobile,
      password: this.props.defaultValues.password,
    };
  }
  handleSubmit = (e) => {
    this.setState({ firstName: e.target.value });
  };
  render() {
    const { defaultValues, onSubmit } = this.props;
    return (
      <div>
        <form action="">
          <div className={"firstname-lastname"}>
            <TextInput
              onChange={(e) => this.setState({ firstName: e.target.value })}
              value={this.state.firstName}
              placeholder={"First name"}
            />
            <TextInput
              onChange={(e) => this.setState({ lastName: e.target.value })}
              value={this.state.lastName}
              placeholder={"Last name"}
            />
          </div>
          <br />
          <TextInput
            onChange={(e) => this.setState({ mobile: e.target.value })}
            value={this.state.mobile}
            placeholder={"Mobile Number or email"}
          />
          <TextInput
            onChange={(e) => this.setState({ password: e.target.value })}
            values={this.state.password}
            placeholder={"New password"}
          />
          <br />
          <br />
          <BirthdayInput />
          <br />
          <GenderInput />
          <br />
          <button
            onClick={(e) => {
              onSubmit(e,this.state);
            }}
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







