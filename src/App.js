import React from 'react';
import TableContainer from './components/Table/TableContainer';
import DropdownContainer from './components/Dropdown/DropdownContainer';
import './App.css';

class Border extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="border">{children}</div>;
  }
}

class App extends React.Component {
  render() {
    return <Border>Armenia</Border>;
  }
}

export default App;
