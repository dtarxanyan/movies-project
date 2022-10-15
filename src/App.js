import React from 'react';
import SignUp from './components/SignUp/SignUp';

class App extends React.Component {
  handleSubmit(e, values) {
    e.preventDefault();
    console.log(values);
  }

  render() {
    return (
      <SignUp
        defaultValues={{
          firstName: 'Suren',
          lastName: 'Zaqaryan',
          email: 'sur_zaqaryan@mail.ru',
          password: '*****',
        }}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default App;
