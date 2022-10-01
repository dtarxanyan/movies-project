import React,  { Component }from 'react';

class Input extends React.Component {
    constructor() {
        super();
        this.state={
            inputValue:" "
        }
    }

    inputValue=(e)=>{
        const input =e.target.value
        this.setState({
            inputValue: input
        })
    }


    render() {

        return (
            <form>
                <label htmlFor="text">Input
                    <input
                        onChange={ this.inputValue }
                        type="text"
                        id="text"
                        placeholder="inputText"
                    />
                </label>
            </form>

        )
    }
}

export default Input;