import React from 'react';

class Dropdown extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <label htmlFor="names">{this.props.label}</label>

        <select id="names" onChange={(e) => this.props.onChange(e)}>
          {!!this.props.isCountry && <option value={'select'}>Select</option>}

          {this.props.options.map((option, index) => {
            return (
              <option key={index} value={option.id}>
                {option.name}
              </option>
            );
          })}
        </select>
      </>
    );
  }
}

export default Dropdown;
