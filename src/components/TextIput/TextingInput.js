import React, { Component } from 'react'
// import './css/Sidebar.css'

export default class TextingInput extends Component {
    render() {
        const {label, placeholder, value, onChange} = this.props
        return (
            <div>
                <input 
                    label={label}
                    placeholder={placeholder}
                    defaultValue={value}
                    onChange={(e) => {console.log(e.target.value)}}
                />
            </div>
        )
    }
}   