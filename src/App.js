import React from "react";
// import UserList from "./components/UserList/UserList";
import Input from "./components/Input";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "Label-1",
      placeholder: "Input your text",
      value: "",
      id: 1,
      change: "foo"
    };
  }

  handleValue = (event) => {
    if (event) {
      this.setState({ value: event.target.value });
    }
  };

  render() {
    const { label, placeholder, value, id, change } = this.state;
    return (
      <Input
        label={label}
        placeholder={placeholder}
        value={value ? value : ""}
        id={id}
        change = {this.handleValue}
      />
    );
  }
}

export default App;
