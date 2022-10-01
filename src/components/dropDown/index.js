import { Component } from "react";

class DropDown extends Component {
  constructor() {
    super();
    this.state = {
      countryData: [],
    };
  }

  componentDidMount() {
    fetch("/data/countryData.json")
      .then((res) => res.json())
      .then((res) => this.setState({ countryData: res }));
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <select className="selectedPart">
          {this.state.countryData.map((country) => {
            return <option key={country.id}>{country.name}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default DropDown;
