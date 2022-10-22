import React from "react";
import Form from "./components/Form";
import TextInput from "./components/TextInput/TextInput";
import Input from "./components/Functional/input";

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

              <TextInput
                label={"Password"}
                name={"password"}
                value={values.password}
                onChange={setValue}
              />
             <Input
             id={"id"}
             className={"class-name"}
             type={"password"}
             label={"password"}
             placeholder={"Enter Password"}
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
