import React, { Component } from "react";
import "./css/select.css";

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
    const { label, value, options } = this.props;
    return (
      <div className="selectContainer">
        <label htmlFor="select">{label}</label>
        <select
          value={this.state.value}
          name="select"
          id="select"
          onChange={(e) => {
            this.handleChange(e);
          }}
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
