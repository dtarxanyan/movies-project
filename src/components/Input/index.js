import { Component } from "react";

class Input extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLabel: false,
            isPlaceholder: false,
            isValue: true,
            selfValue: ''
        }

    }
    handleSelfOnchange = (selfE) => {
        this.setState({
            selfValue: selfE.target.value,
        })
    }

    render() {
        const {label, placeholder, value, handleOnChange} = this.props;
        const {isLabel, isPlaceholder, isValue, selfValue} = this.state;
        return (
            <div>
                 <label htmlFor="inputId">{isLabel && label}</label>
                <input
                id='inputId'
                placeholder={isPlaceholder && placeholder}             
                type='text'
                onChange={isValue? (e) => handleOnChange(e): (selfE) => this.handleSelfOnchange(selfE)}
                value={isValue?  value : selfValue}
                 />
            </div>
        )
    }
}

export default Input;