import React from 'react';

class Input extends React.Component {

    handleRemoveClick = (e) => {
        e.target.value
    }

    render() {

        return (
            <form>
                <label htmlFor="text">Input
                    <input
                        type="text"
                        id="text"
                        onChange={this.handleRemoveClick}
                    />
                </label>\
            </form>

        )
    }
}

export default Input;