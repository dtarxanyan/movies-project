import React from 'react';
import Dropdown from './components/Dropdown';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    fetch('/public/data/countries.json')
      .then((res) => res.json())
      .then((res) => this.setState({ countries: res }));
  }

  render() {
    return <Dropdown placeholder={10} value={100} />;
  }
}

export default App;
