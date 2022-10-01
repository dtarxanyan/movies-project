import React, { Component } from 'react'
import './css/Sidebar.css'

export default class Input extends Component {
    render() {
        const {label, placeholder, value, onChange} = this.props
        return (
            <div>
                <input 
                    label={label}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        )
    }
}