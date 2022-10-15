import React, { Component } from 'react'
import '../FbForm/style.css'

export default class FbIndex extends Component {

  render() {
    return (
      <div className='form'>
        <div className='top'>
          <h1>Sign up</h1>
          <p>it's quick and easy</p>
        </div>
        <div className='form-sign-up'>
          <div className='up-form'>
            <input type="text" className='but' id="fname" name="firstname" placeholder="First name.." />
            <input type="text" className='but' id="lname" name="lastname" placeholder="Last name.." /> <br />
            <input type="text" className='but' id="mobnumber" name="mobnumber" placeholder="Mobile number or email" /><br />
            <input type="text" className='but' id="password" name="password" placeholder="New password" />
          </div>
          <div className='down-form'>
            <p>Birthday</p>
            <select id="form-month" name="form-month" value="1">
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
            <select id="form-day" name="form-day" value="1">
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
            <select id="form-year" name="form-year" value="2011">
              <option value="-">-</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
            </select>
            <p>Gender</p>
            <input type="radio" id="gender" name="gender" value="Female" />
            <label for="female">Female</label>
            <input type="radio" id="male" name="gender" value="Male" />
            <label for="male">Male</label>
            <input type="radio" id="custom" name="gender" value="Custom" />
            <label for="custom">Custom</label>
          </div>
        </div>
        <div className='form-down-text'>
          <p>
            People who use our service may have uploaded your contact information to Facebook. Learn more. <br />
            By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.
            You may receive SMS Notifications from us and can opt out any time.
          </p>
          <div className='sub'>
            <button class="subButton">Button</button> <br />
            <a href="#">Already have an account?</a>
          </div>
        </div>
      </div>
    )
  }
}
