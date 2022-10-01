import React from "react";
import TextInput from "./components/TextInput/TextInput";
import Select from "./components/Select/Select";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      options: [],
    };
  }

  async componentDidMount() {
    let data = await fetch("/data/sidebar.json");
    let options = await data.json();
    this.setState({ options: [...options] });
  }
  render() {
    return (
      this.state.options.length && (
        <Select
          options={this.state.options}
          label="Test Label"
          value="Test Value"
          onChange={(value) => {
            console.log(value);
          }}
        ></Select>
      )
    );
  }
}

export default App;
