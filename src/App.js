import React from 'react';
import SignUp from "./components/SignUp/SignUp";

class App extends React.Component {

  handleSubmit(values){
    console.log(values)
  }

  render() {
    return <SignUp
        defaultValues={{
          firstName:"Arsen",
          lastName : "Sahakyan",
          mobileNumber : "125485632",
          password : "****",
        }}
          onSubmit = {this.handleSubmit}

    />;
  }
}

export default App;
