import React, { Component } from 'react'

export default class Dropdown extends Component {

    handleClick(e) {
        console.log(e.target.value)
    }

    render() {
        return (
            <div>
                <label htmlFor='select'>{this.props.label}</label>
                <select id='select' onChange={(e) => { this.handleClick(e) }}>
                    <option>{this.props.value}</option>
                    {this.props.users.map(user =>
                        <option key={user.id}>
                            {user.name}
                        </option>)}
                </select>
            </div>
        )
    }
}
