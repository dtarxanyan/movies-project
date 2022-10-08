import React from 'react';
import TextInput from "./components/TextInput/TextInput";
import Table from './components/Table/Table';
import Dropdown from './components/Dropdown/Dropdown'

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
        <Dropdown
          options={this.state.options}
          label="Test Label"
          value="Test Value"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        ></Dropdown>
      )
    );
  }
}

export default App;
