import React, { Component } from 'react';

class Dropdown extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <label htmlFor="input">My dropDown!</label>
        <input type="text" list="data" />
        <datalist id="data"></datalist>
      </div>
    );
  }
}

export default Dropdown;
