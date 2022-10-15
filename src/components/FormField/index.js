import { Component } from "react";

class FormField extends Component {
  render() {
    return (
      <div className="container">
        <div className="top">
          <h1>Sign Up</h1>
          <span>It`s quick and easy.</span>
        </div>

        <hr></hr>
        <form className="formInput">
          <div className="headerInput">
            <input type="text" name="firstName" placeholder="First name" />
            <input type="text" name="lastName" placeholder="Last name" />
          </div>
          <div className="formSecond">
            <input
              type="email"
              name="mobile"
              placeholder="Mobile number or email"
            />
            <input type="password" name="password" placeholder="New password" />
          </div>
          <span className="birthdaySpan">Birthday</span>
          <div className="birthDay">
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <select>
              <option>May</option>
              <option>June</option>
              <option>October</option>
            </select>
            <select>
              <option>2015</option>
              <option>2019</option>
              <option>2020</option>
            </select>
          </div>
          <div className="gender">
            <span className="genderSpan">Gender</span>
            <label htmlFor="fem">
              Female
              <input type="radio" name="genderType" id="fem"></input>
            </label>
            <label htmlFor="mal">
              Male
              <input type="radio" name="genderType" id="mal"></input>
            </label>
            <label htmlFor="cus">
              Custom
              <input type="radio" name="genderType" id="cus"></input>
            </label>
          </div>
          <div className="submit">
            <button>Register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default FormField;
