import React from "react";

class Input extends React.Component{
    constructor(){
        super()
        this.state = {
            input: ""
        }
    }
    hendelInput = (e) => {
        const input = e.target.value
        this.setState({
            input: input
        })
    }
    render(){
        return(
            <form>
                <label>
                    <input placeholder="text" type="text" onChange={this.hendelInput}/>
                </label>
            </form>
        )
    }
}

export default Input