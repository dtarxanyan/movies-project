import React, {useState} from "react";
import Form from "./components/Form";
import TextInput from "./components/TextInput/TextInput";
import Input from "./components/Functional/Input/Input";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const [value, setValue] = useState('initState');

    return (
        <Input
            id={'id'}
            className={'class-name'}
            type={'password'}
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
