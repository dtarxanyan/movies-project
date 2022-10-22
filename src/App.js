import React from 'react';
import Form from './components/Form';
import Input from './components/TextInput/TextInput';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        defaultValues={{
          name: 'Tigran',
          email: 'Tigran@gmail.com',
          password: '123456',
        }}>
        {(form) => {
          const { setValue, values } = form;
          return (
            <div className="container">
              <Input
                type={'text'}
                className={'className'}
                id={'id'}
                label={'Name'}
                name={'name'}
                value={values.name}
                onChange={setValue}
                placeholder="Write your name"
              />
              <Input
                type={'text'}
                className={'className'}
                id={'id'}
                placeholder={'...'}
                label={'Email'}
                name={'email'}
                value={values.email}
                onChange={setValue}
              />
              <Input
                type={'text'}
                className={'className'}
                id={'id'}
                placeholder={'...'}
                label={'Password'}
                name={'password'}
                value={values.password}
                onChange={setValue}
              />
              <button type={'submit'} className="subBTN">
                Submit Form
              </button>
            </div>
          );
        }}
      </Form>
    );
  }
}

export default App;
