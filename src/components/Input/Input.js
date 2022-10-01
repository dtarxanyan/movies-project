import React, { Component } from 'react'
import './css/input.css'
export default class Input extends Component {
  render() {
  const {placeholder, value, callback, label} = this.props  
    return (
      <div className='inputContainer'>
         <label htmlFor='input'>{label}</label>
         <input 
               id='input'
               type='text' 
               placeholder= {placeholder ? placeholder : ''}
               defaultValue= {value} 
               onChange = {(e) => callback(e.target.value)}
               ></input>
      </div>
    )
  }
}
