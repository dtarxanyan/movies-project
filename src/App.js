import React from 'react';
import SignUp from "./components/SignUp/SignUp";

class App extends React.Component {


  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return <SignUp
      defaultValue={{
        fristName: 'Narek',
        lastName: 'Hovakimyan',
        number: '1111111',
        password: '555555',
        onSubmit: this.handleSubmit
      }
      }
    />;
  }
}

export default App;
