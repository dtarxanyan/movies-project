import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: props.defaultValues,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.values);
  };

  setValue = (name, value) => {
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  };

  render() {
    return (
      <div>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          {this.props.children({
            setValue: this.setValue,
            values: this.state.values,
          })}
        </form>
      </div>
    );
  }
}

export default Form;
