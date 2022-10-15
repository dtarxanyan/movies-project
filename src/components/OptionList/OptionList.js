import React from "react";

class OptionList extends React.Component {
  render() {
    return <div>
        <select>
            <option >1</option>
            <option >2</option>
            <option >3</option>
        </select>
        <select>
            <option >oct</option>
            <option >nov</option>
            <option >dec</option>
        </select>
        <select>
            <option >2022</option>
            <option >2023</option>
            <option >2024</option>
        </select>
    </div>;
  }
}

export default OptionList;
