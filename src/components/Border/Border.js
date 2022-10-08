import React, { Component } from 'react'
import './Border.css'

export default class Border extends Component {
  render() {
    return (
      <div className='border'>
       {this.props.children}
      </div>
    )
  }
}
