import React from "react";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: this.props.defaultValue,
    };
  }

  componentDidUpdate() {
    this.props.onChange(this.state.valueInput);
  }

  render() {
    const { label, placeholder } = this.props;

    return (
      <div className={"text-input"}>
        <label htmlFor={"text-input"}>{label}</label>
        <br />
        <input
          id={"text-input"}
          type={"text"}
          value={this.state.valueInput}
          placeholder={placeholder}
          onChange={(e) => this.setState({ valueInput: e.target.value })}
        />
      </div>
    );
  }
}

export default TextInput;
