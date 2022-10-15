import React from 'react';
import SignUp from "./components/SignUp/SignUp";

class App extends React.Component {

  handleSubmit  (e){
   e.preventDefault()

  }

  render() {
    return <SignUp default = {{name:'tarzan'}}handleSubmit = {this.handleSubmit} />;
  }
}

export default App;
