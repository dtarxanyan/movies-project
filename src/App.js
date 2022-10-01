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
    fetch('/data/countries.json')
      .then((res) => res.json())
      .then((res) => this.setState({ countries: res }));
  }

  render() {
    return (
      <Dropdown
        placeholder={'text..'}
        options={this.state.countries}
        label={'input'}
        value={'Armenia'}
        onChange={() => console.log('DROW-DOWN')}
      />
    );
  }
}

export default App;
