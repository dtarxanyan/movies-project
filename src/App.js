import React from "react";
import Form from "./components/Form";
import TextInput from "./components/TextInput/TextInput";
import TextInputF from "./components/Functional/TextInputF/TextInputF";


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
              <TextInputF
                label={"Name"}
                name={"name"}
                value={values.name}
                onChange={setValue}
                placeholder="Write your name"
              />

              <TextInputF
                label={"Email"}
                name={"email"}
                value={values.email}
                onChange={setValue}
              />

              <TextInputF
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
