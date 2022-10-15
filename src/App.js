import React from 'react';
import SignUp from "./components/SignUp/SignUp";

class App extends React.Component {

  handleSubmit(values) {
    console.log(values);
  }
  
  render() {
    return <SignUp 
      defaultValues={{
        firstName:'Alice',
        lastName: 'Wonderland',
        number: '116',
        password: '365',
        onSubmit: this.handleSubmit
      }}
      />;
  }
}

export default App;