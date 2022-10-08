import { Component } from "react";

class Border extends Component {
  render() {
    const { children } = this.props;
    return <div className="border">{children}</div>;
  }
}

export default Border;
