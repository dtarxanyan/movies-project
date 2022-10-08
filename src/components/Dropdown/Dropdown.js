import React, { Component } from "react";
import "./css/dropdown.css";

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onChange(value);
  };
  render() {
    const { label, value, options, onChange } = this.props;
    return (
      <div className="selectContainer">
        <label htmlFor="select">{label}</label>
        <select
          name="select"
          id="select"
          onChange={onChange}
        >
          <option>{value}</option>
          {options.map((el) => {
            return (
              <option key={el.id} value={el.name}>
                {el.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}