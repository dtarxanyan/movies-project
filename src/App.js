import React from "react";
import Form from "./components/Form";
import TextInput from "./components/TextInput/TextInput";
import Input from "./functional-components/Input/Input";

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
          name: "Tigran",
          email: "Tigran@gmail.com",
          password: "123456",
        }}
      >
        {(form) => {
          const { setValue, values } = form;
          return (
            <div className="container">
              <TextInput
                label={"Name"}
                name={"name"}
                value={values.name}
                onChange={setValue}
                placeholder="Write your name"
              />

              <TextInput
                label={"Email"}
                name={"email"}
                value={values.email}
                onChange={setValue}
              />

              <Input
                  id={"id"}
                  className={"class-name"}
                  type={"text"}
                  placeholder={"Enter Password"}
                  label={"Password"}
                  name={"password"}
                  value={values.password}
                  onChange={setValue}
              />

              <button type={"submit"} className="subBTN">
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
