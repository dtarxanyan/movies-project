import { Component } from "react";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "input your value"
    };
  }

  render() {
    const {placeholder, value, id, change} = this.props
    return (
      <div>
            <label htmlFor={id? id: null}>1. </label>
          <input placeholder = {placeholder} value={value} id = {id} onChange = {change}></input>
       
      </div>
    );
  }
}
