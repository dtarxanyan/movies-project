import React, {Component} from 'react';

class InputText extends Component {
    render() {
        const { onChange, placeholder, value, label } = this.props;

        return (
            <div>
                <label htmlFor="text">{ label }</label>
                <input
                    defaultValue= { value }
                    id={'text'}
                    placeholder={ placeholder }
                    onChange={ (event) => onChange(event) }
                    type="text"/>
            </div>
        );
    }
}

export default InputText;