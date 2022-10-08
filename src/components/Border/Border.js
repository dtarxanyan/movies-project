import React, { Component } from "react";
import "./css/border.css";

export default class Border extends Component {
  render() {
    return <div className="bordered">{this.props.children}</div>;
  }
}
