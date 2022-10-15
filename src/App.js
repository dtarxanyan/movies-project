import React from 'react';
import SignUp from "./components/SignUp/SignUp";

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  handleSubmit = (value) => {
      console.log(value)
  }

  render() {


    return <SignUp
        defaultValues = { {
          firstName: 'Suren',
          lastName: 'Gasparyan',
          mobileNumber: '+37443999988',
          _password: '********'
        } }
        onSubmit = { this.handleSubmit }/>;
  }
}

export default App;
