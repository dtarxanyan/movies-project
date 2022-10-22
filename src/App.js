import React from "react";
import Form from "./components/Form";
import Input from "./components/functional/Input";
import TextInput from "./components/TextInput/TextInput";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <Input 
          className = "class"
          type = "text"
          name = "name"
          label = "Test Lable"
          placeholder = "test placeholder"
          id = "functionalInput" 
          defaultValue = "Test value"
          onChange = {() => console.log(10)}
      ></Input>
    );
}
}

export default App;
