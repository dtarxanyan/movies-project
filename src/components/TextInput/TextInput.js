import React from 'react';
import DropDownInput from "../dropDownInput";

class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({value});
        this.props.onChange(value);
    }

    render() {
        const {label, placeholder, onChange} = this.props;

        return (
            <div className={'text-input'}>
                <label htmlFor={'text-input'}>{label}</label>
                <br/>
                <br/>

                <DropDownInput/>
            </div>
        )
    }
}

export default TextInput;