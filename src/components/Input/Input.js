import React from "react";

class Input extends React.Component {
    constructor(props) {
        super();
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <div>
                <label htmlFor="inp">{this.props.label}</label>
                <input 
                  id="inp"
                  type="text"
                  placeholder={this.props.placeholder}
                  value={this.props.value}
                  onChange={(e) => this.setState({ value: e.target.value })}
                />
            </div>
        );
    }
}

export default Input;