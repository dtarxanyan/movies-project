
import { Component } from "react";

class RegionData extends Component {
  constructor(props) {
    super(props);
    
  }


  render() {
    const { name} = this.props;
    return (
      <>
        <option >
          {name} 
        </option>
      </>
    );
  }
}

export default RegionData;
