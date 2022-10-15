import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <form>
        <div>
        <input placeholder='First Name'></input>
        <input placeholder='Last Name'></input>
        <div>
        <input placeholder='Mobile number or email'></input>
        </div>
        <input placeholder='New password'></input>
        </div>
        <select>
            <option value='Jun'>Jun</option>
            <option value='Feb'>Feb</option>
            <option value='Mar'>Mar</option>
            <option value='Apr'>Apr</option>
            <option value='May'>May</option>
            <option value='Jun'>Jun</option>
            <option value='Jul'>Jul</option>
            <option value='Aug'>Aug</option>
            <option value='Sep'>Sep</option>
            <option value='Oct'>Oct</option>
            <option value='Nov'>Nov</option>
            <option value='Dec'>Dec</option>
        </select>
        <select>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        </select>
        <select>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        </select>
        <div>
        <label htmlFor='Female'>
            <span>Female</span>
            <input id='Female' name='gender' type='radio'></input>
        </label>
        <label htmlFor='Male'>
            <span>Male</span>
            <input id='Male' name='gender' type='radio'></input>
        </label>
        <label htmlFor='Custom'>
            <span>Custom</span>
            <input id='Custom' name='gender' type='radio'></input>
        </label>
        </div>
        <div>
            <select>
                <option value=''>
                    She:Wish her happy birthday
                </option>
            </select>
        </div>
        <input placeholder='gender'></input>
        <div>
        <button type='submit'>Sign Up </button>
        </div>
      </form>
    )
  }
}
