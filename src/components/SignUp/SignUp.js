import React, { Component } from 'react';
import BirthdayInput from './BirthdayInput/BirthdayInput';
import GenderInput from './GenderInput/GenderInput';
import TextInput from '../TextInput/TextInput';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        ...this.props.defaultValues,
      },
    };
  }

  handleInput = (name, value) => {
    this.setState({
      values: { ...this.state.values, [name]: value },
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.props.onSubmit(e, this.state)}>
          <div className={'firstname-lastname'}>
            <TextInput
              onChange={(e) => this.handleInput('firstName', e)}
              value={this.state.values.firstName}
            />
            <TextInput
              onChange={(e) => this.handleInput('lastName', e)}
              value={this.state.values.lastName}
            />
          </div>
          <br />
          <TextInput
            onChange={(e) => this.handleInput('email', e)}
            value={this.state.values.email}
          />
          <TextInput
            onChange={(e) => this.handleInput('password', e)}
            value={this.state.values.password}
          />
          <br />
          <br />
          <BirthdayInput />
          <br />
          <GenderInput />
          <br />
          <button type={'submit'}>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
