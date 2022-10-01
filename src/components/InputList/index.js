import React,  { Component }from 'react';

class Input extends React.Component {
    constructor() {
        super();
        this.state={
            inputValue:" "
        }
    }

    inputOnChangeValue=(e)=>{
        const input =e.target.value;
        this.setState({
            inputValue: input
        })
    }


    render() {

        return (
            <form>
                <label htmlFor="text">Input
                    <input
                        onChange={ this.inputOnChangeValue }
                        type="text"
                        id="text"
                        placeholder="inputText"
                        inputvalue = { this.state.inputValue }
                    />
                </label>
            </form>

        )
    }
}

export default Input;