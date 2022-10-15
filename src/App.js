import React from 'react';
import SignUp from "./components/SignUp/SignUp";

class App extends React.Component {


  handleSubmit =(values) => {
    console.log(values)
  }


  render() {
    return <SignUp
    defaultValues = {{
      firstName: "David",
      lastName: "Habetyan",
      mobileOrEmail: "+37494737343",
    }}
    onSubmit={this.handleSubmit}
    />;
  }
}

export default App;
