import React from 'react';
import SignUp from "./components/SignUp/SignUp";

class App extends React.Component {

  handleSubmit = (value) => {
    console.log(value)
  }

  render() {
    return <SignUp
        defaultValus={
          {
              firstName: 'aaa',
              lastName: 'bbb',
              password: 'ddd',
              email: 'ccc'
            }
        }
        onSubmit={this.handleSubmit}
    />;
  }
}

export default App;