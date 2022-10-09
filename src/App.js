import React from 'react';
import './App.css';
import Border from './components/Border/Border';
import Dropdown from '../src/components/Dropdown/Dropdown';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      countries: [],
      cities: [],
      showCities: [],
    };
  }

  componentDidMount() {
    fetch('/data/countries.json')
      .then((resp) => resp.json())
      .then((countries) => {
        this.setState({
          countries: countries,
        });
      });

    fetch('/data/cities.json')
      .then((resp) => resp.json())
      .then((cities) => {
        this.setState({
          cities: cities,
          showCities: [{ name: 'Select the country!' }],
        });
      });
  }

  render() {
    return (
      <Border>
        <Dropdown
          isCountry={true}
          options={this.state.countries}
          label="Countries"
          onChange={(e) => {
            this.setState({
              showCities: this.state.cities.filter((city) => city.id == e.target.value),
            });
          }}
        />
        <Dropdown
          isCountry={false}
          options={this.state.showCities}
          label="Cities"
          onChange={() => console.log('City is changed!')}
        />
      </Border>
    );
  }
}

export default App;
