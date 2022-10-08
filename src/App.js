import React from 'react';
import './App.css';
import Table from './components/Table';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch('/data/users.json')
      .then((res) => res.json())
      .then((users) =>
        this.setState({
          users: users,
        }),
      );
  }

  removeUser = (name) => {
    this.setState({
      users: this.state.users.filter((user) => {
        return user.name !== name;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <Table users={this.state.users} onclick={this.removeUser} />
      </div>
    );
  }
}

export default App;
