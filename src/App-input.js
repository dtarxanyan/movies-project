import React from 'react';
import Input from '../src/components/Input';

class AppInput extends React.Component {
    constructor() {
        super();
        this.state = {
            label: "click on this",
            placeholder: 'enter the text',
            value: 'current text'
        }
    }

    handleOnChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        const {label, placeholder, value} = this.state; 
        return (
            <Input
             placeholder={placeholder}
              label={label} 
              handleOnChange={this.handleOnChange} 
              value={value}
              />
        )
    }
}

export default  AppInput;
