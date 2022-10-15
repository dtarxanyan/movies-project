import React from "react";

class OptionList extends React.Component {
  render() {
    const {props:{Dey}}=this
    return <div>
        <select>
            <option Oct={Dey} key="">{Dey}</option>
        </select>
    </div>;
  }
}

export default OptionList;
