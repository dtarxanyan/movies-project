import React from 'react';
import SignUp from "./components/SignUp/SignUp";

class App extends React.Component {

  handleSubmit(e,values) {
    e.preventDefault()
    console.log(values);
  }
  
  render() {
    return <SignUp 
      defaultValues={{
        firstName:'Alice',
        lastName: 'Wonderland',
        mobile: '116',
        password: '365',
        onSubmit: this.handleSubmit
      }}
      />;
  }
}

export default App;