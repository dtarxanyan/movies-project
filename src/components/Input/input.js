import React, {Component} from 'react';

class InputText extends Component {
    render() {
        const { handleInput } = this.props;

        return (
            <div>
                <label htmlFor="text">Text</label>
                <input
                    id={'text'}
                    placeholder={'input text...'}
                    onChange={(event) => handleInput(event)}
                    type="text"/>
            </div>
        );
    }
}

export default InputText;