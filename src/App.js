import React from "react";
import SignUp from "./components/SignUp/SignUp";

class App extends React.Component {
  handleSubmit = (values) => {
    console.log(values);
  };

  render() {
    return <SignUp onSubmit={this.handleSubmit} />;
  }
}

export default App;
