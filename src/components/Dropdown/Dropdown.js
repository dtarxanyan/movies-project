import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';

class Dropdown extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <label htmlFor="names">{this.props.label}</label>

        <select id="names" onChange={this.props.onChange}>
          {this.props.options.map((option) => {
            if (option.id === this.props.value.id) {
              return (
                <option selected key={option.id}>
                  {option.firstName}
                </option>
              );
            } else {
              return <option key={option.id}>{option.firstName}</option>;
            }
          })}
        </select>
      </>
    );
  }
}

export default Dropdown;
