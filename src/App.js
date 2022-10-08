import React from "react";
import Frame from "./components/Frame/Frame";
import TextInput from "./components/TextInput/TextInput";

class App extends React.Component {
  render() {
    return (
      <>
        <TextInput
          label={"First Name"}
          placeholder={"Enter Your Name"}
          value={"Initial Value"}
          onChange={(newValue) => {
            console.log(newValue);
          }}
        />
        <Frame>
          <p>chaild</p>
        </Frame>
      </>
    );
  }
}

export default App;
