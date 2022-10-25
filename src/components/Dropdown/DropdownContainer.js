import React from 'react';
import Dropdown from './Dropdown';

class DropdownContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('/data/users.json')
      .then((resp) => resp.json())
      .then((users) => {
        this.setState({
          users: users,
        });
      });
  }

  render() {
    return (
      <Dropdown
        options={this.state.users}
        label="Names"
        value={{ id: 4 }}
        onChange={() => console.log('Hellooooo')}
      />
    );
  }
}

export default DropdownContainer;
