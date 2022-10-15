import { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h1>Sign Up</h1>
          <p>it's quick and easy</p>
          <div className="header">
            <form>
              <input type="text" placeholder="First name"></input>
              <input type="text" placeholder="Last name"></input>
              <br></br>
              <input
                className="mobile"
                type="text"
                placeholder="Mobile number or email"
              ></input>
              <br></br>
              <input
                className="pass"
                type="text"
                placeholder="New password"
              ></input>
              <br></br>
              <select>
                <option>jun</option>
                <option>feb</option>
              </select>
              <select>
                <option>14</option>
                <option>15</option>
              </select>

              <select>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
              </select>

              <h4>gender?</h4>

              <div>
                <label htmlFor="Female">Female</label>
                <input type="radio" id="Female" name="Female"></input>
                <label htmlFor="Male">Male</label>
                <input type="radio" id="Male" name="Male"></input>
                <label htmlFor="Custom">Custom</label>
                <input type="radio" id="Custom" name="Custom"></input>
              </div>
              <div>
                <select>
                  <option>She:'Wish her a happy birthday!'</option>
                  <option>Select your pronown</option>
                </select>
                <input type="text" placeholder="Gender(optional"></input>
              </div>
            </form>
          </div>
          <button className="btn">Sign Up</button>
        </div>
      </>
    );
  }
}
