import React, { Component } from 'react'

export default class FbIndex extends Component {

  render() {
    return (
      <div className='form'>
        <h1>Sign up</h1>
        <p>it's quick and easy</p>
        <div className='form-sign-up'>
          <div className='up-form'>
            <input type="text" id="fname" name="firstname" placeholder="First name.." />
            <input type="text" id="lname" name="lastname" placeholder="Last name.." />
            <input type="text" id="mobnumber" name="mobnumber" placeholder="Mobile number or email" />
            <input type="text" id="password" name="password" placeholder="New password" />
          </div>
          <div className='down-form'>
            <p>Birthday</p>
            <select id="form_dob_month" name="dob_month" value="1">
              <option value="-">-</option>
              <option value="1">January</option>
              <option value="2">Febuary</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
            <select id="form_dob_day" name="dob_day" value="1">
              <option value="-">-</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
            <select id="form_dob_year" name="dob_year" value="2011">
              <option value="-">-</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>\
            </select>

          </div>
        </div>
      </div >
    )
  }
}
