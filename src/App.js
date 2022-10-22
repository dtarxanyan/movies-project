import React from "react";
import Form from "./components/Form";
import TextInput from "./components/TextInput/TextInput";
import Input from "./components/Functional/Input/Input";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'value'
    }
  }

  setValue = () => {

  }

  render() {
    const { setValue, value } = this.state
    return (
        <Input
            id={'id'}
            className={'class-name'}
            type={'text'}
            label={'password'}
            placeholder={'Enter Password...'}
            name={'password'}
            value={value.password}
            onChange={setValue}
        />
    );
  }
}

export default App;
