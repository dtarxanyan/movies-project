import { Component } from "react";

class DropDownComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <select
        className="select"
        onChange={(e) => this.props.countryID(e.target.value)}
      >
        {this.props.countiesData.map((country) => {
          return (
            <option value={country.id} className="option" key={country.id}>
              {country.name}
            </option>
          );
        })}
      </select>
    );
  }
}

export default DropDownComponent;
