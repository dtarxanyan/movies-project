import React, {Component} from 'react';

class InputText extends Component {
    render() {
        const { handleInput, placeholder, value, label } = this.props;

        return (
            <div>
                <label htmlFor="text">{ label }</label>
                <input
                    value = { value }
                    id={'text'}
                    placeholder={ placeholder }
                    onChange={ (event) => handleInput(event) }
                    type="text"/>
            </div>
        );
    }
}

export default InputText;