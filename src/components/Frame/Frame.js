import React from "react";

class Frame extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="frame">{children}</div>;
  }
}

export default Frame;
