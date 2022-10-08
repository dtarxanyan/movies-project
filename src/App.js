import React from 'react';
import TextInput from "./components/TextInput/TextInput";
import Table from './components/Table/Table';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      options: [],
    };
  }
  onDelete = (id) => {
    this.setState({
      options: this.state.options.filter(el => el.id != id)
    })
  }
  async componentDidMount() {
    let data = await fetch("/data/sidebar.json");
    let options = await data.json();
    this.setState({ options: [...options] });
  }
  render() {
    return (
      this.state.options.length && (
        <Table data = {this.state.options}
               onDelete = {this.onDelete}></Table>
      )
    );
  }
}

export default App;
