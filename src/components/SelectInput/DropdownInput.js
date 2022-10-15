import React from 'react';

class DropdownInput extends React.Component {
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
        const {label, placeholder} = this.props;

        return (
            <div className={'text-input'}>
                <label htmlFor={'text-input'}>{label}</label>
                <br/>
                <input
                    type={'text'}
                    id={'text-input'}
                    value={this.state.value}
                    placeholder={placeholder}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default DropdownInput;