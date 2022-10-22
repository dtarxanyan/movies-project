import React from "react";
import Form from "./components/Form";
import TextInput from "./components/TextInput/TextInput";
import Input from "./components/Functional/Input";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <Input label='aaa' placeholder='bbb' defaultValue='ggg'></Input>
    );
  }
}

export default App;
