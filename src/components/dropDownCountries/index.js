import { Component } from "react";

import { countryData } from "../../constants/countryData";

import "./main.css";

class DropDownCountriesList extends Component {
  constructor() {
    super();
    this.state = {
      countryStateData: [],
      isHidden: true,
      selectedCountry: "",
    };
  }

  componentDidMount() {
    this.setState({
      countryStateData: countryData.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      }),
    });
  }

  render() {
    return (
      <div className="wrapper">
        <div
          onClick={() => this.setState({ isHidden: !this.state.isHidden })}
          className="selectBtn"
        >
          <span>
            {this.state.selectedCountry
              ? this.state.selectedCountry
              : "Select Country"}
          </span>
        </div>
        <div className={this.state.isHidden ? "hiddenContent" : "content"}>
          <ul className="options">
            {this.state.countryStateData.map((country) => (
              <li
                onClick={() => this.setState({ selectedCountry: country.name })}
                key={country.id}
              >
                {country.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default DropDownCountriesList;
