import { Component } from "react";

class DropDownCountries extends Component {
  constructor() {
    super();
    this.state = {
      counties: [],
      regions: [],
      currentCountryId: "",
    };
  }

  componentDidMount() {
    fetch("/data/countriesData.json")
      .then((res) => res.json())
      .then((res) => this.setState({ counties: res }));
    fetch("/data/regionsData.json")
      .then((res) => res.json())
      .then((res) => this.setState({ regions: res }));
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <select
          onChange={(e) => this.setState({ currentCountryId: e.target.value })}
        >
          {this.state.counties.map((country) => {
            return (
              <option value={country.id} key={country.id}>
                {country.name}
              </option>
            );
          })}
        </select>
        <div>
          <select>
            {this.state.regions
              .filter((region) => region.id === currentCountryId)
              .map((reg) => {
                reg.name;
              })}
          </select>
        </div>
      </div>
    );
  }
}

export default DropDownCountries;
