import React from "react";
import SignUp from "./components/SignUp/SignUp";

class App extends React.Component {
  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <SignUp
        defaultValues={{
          firstName: "Suren",
          lastName: "Manukyan",
          mobileNumber: "00 00 00 00",
          password: "12345",
        }}
        onSubmit={handleSubmit}
      />
    );
  }
}

export default App;
