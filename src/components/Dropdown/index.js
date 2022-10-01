import React, { Component } from 'react';

class Dropdown extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.label}>My dropDown!</label>
        <input
          placeholder={this.props.placeholder}
          type="text"
          defaultValue={this.props.value}
          onChange={this.props.onChange}
          list="data"
        />
        <datalist id="data">
          {this.props.options.map((el) => {
            return <option key={el.name}>{el.name}</option>;
          })}
        </datalist>
      </div>
    );
  }
}

export default Dropdown;
