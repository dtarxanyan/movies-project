import React, {Component} from 'react';

class InputBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onChange, value} = this.props;
        return (
            <div>
                <label htmlFor="input" > Write your code</label>
                <input
                    id={"input"}
                    value={value}
                    onChange={ (event) => {
                        onChange(event)
                    }}
                    type="text"
                    placeholder={"text..."}
                />
            </div>
        );
    }
}

export default InputBar;