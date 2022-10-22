import React from 'react';
import Layout from './components/Functional/Layout/Layout';
import RegistrationPage from './components/Functional/RegistrationPage/RegistrationPage';
import Calc from './components/Calc/Calc';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Calc area={10} />
      </>
    );
  }
}

export default App;
