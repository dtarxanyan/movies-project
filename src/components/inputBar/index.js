import React, {Component} from 'react';

class InputBar extends Component {
    render() {
        const {handelInput} = this.props;
        return (
            <div>
                <label htmlFor="input" > Write your code</label>
                <input
                    id={"input"}
                    onChange={handelInput}
                    type="text"
                    placeholder={"text..."}
                />
            </div>
        );
    }
}

export default InputBar;