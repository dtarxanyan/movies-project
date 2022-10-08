import { Component } from "react";

class BorderRender extends Component {
  constructor() {
    super();
  }

  render() {
    const { children } = this.props;
    return <div className="box">{children}</div>;
  }
}

export default BorderRender;
