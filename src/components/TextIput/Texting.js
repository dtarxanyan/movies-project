import React, { Component } from 'react'

export default class Texting extends Component {
    constructor() {
        super()
        this.state = {
            items: []
        }
    }
    render() {
        return (
            <div>
                 {this.state.items.map(item => {
                    return (
                        <inout
                            label={item.label}
                            placeholder={item.placeholder}
                            value={item.value}
                            onChange={item.onChange}
                        />
                    )
                })}
            </div>
        )
    }
}
