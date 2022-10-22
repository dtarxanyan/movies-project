import React from "react";
import Form from "./components/Form";
import TextInput from "./components/FunctionalComponent";

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
                id="nameInput"
                name={"name"}
                value={values.name}
                onChange={setValue}
                placeholder="Write your name"
              />

              <TextInput
                label={"Email"}
                id="emailInput"
                name={"email"}
                value={values.email}
                onChange={setValue}
              />

              <TextInput
                label={"Password"}
                name={"password"}
                id="passInput"
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
