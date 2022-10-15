import React from 'react';
import SignUp from "./components/SignUp/SignUp";

class App extends React.Component {

  handleSubmit = (value) => {
    console.log(value)
  }

  render() {
    return <SignUp
        defaultValues={
          {
              firstName: '',
              lastName: '',
              password: '',
              email: ''
            }
        }
        onSubmit={this.handleSubmit}
    />;
  }
}

export default App;