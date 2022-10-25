import React from "react";

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onChange(this.props.name, value);
  };

  render() {
    const { label, placeholder, onChange } = this.props;
    return (
      <div className={"text-input"}>
        <label htmlFor={"text-input"}>{label} : </label>

        <input
          id={"text-input"}
          type={"text"}
          value={this.state.value}
          placeholder={placeholder}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default TextInput;
