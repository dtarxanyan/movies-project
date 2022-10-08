import React from "react";
import '../../App.css';

class Border extends React.Component {

    render() {
      const { children } = this.props
      return (
        <div className="border"> {children} </div>)
    }
  }
  
export default Border