import React, { Component } from "react";
import "./css/form.css";

export default class extends Component {
	render() {
		return (
			<div className="wrapper">
				<div className="header">
					<h1>Sign Up</h1>
					<p>It's quick and easy</p>
				</div>
				<form>
					<div className="inputs">
						<input type="text" placeholder="First name"></input>
						<input type="text" placeholder="Last name"></input>
						<br />
						<input type="text" placeholder="Mobile number or email"></input>
						<input type="password" placeholder="New password"></input>
					</div>
					<div className="birth">
						<span className="label">Birthday</span>
						<br />
						<select id="month">
							<option value="oct">Oct</option>
							<option value="sep">Sep</option>
							<option value="mar">Mar</option>
						</select>
						<select id="day">
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
						</select>
						<select id="year">
							<option value="2022">2022</option>
							<option value="2021">2021</option>
							<option value="2020">2020</option>
						</select>
					</div>
					<div className="gender">
						<span className="label">Gender</span>
						<label htmlFor="female">Female</label>
						<input type="radio" id="female" name="gender"></input>
						<label htmlFor="male">Male</label>
						<input type="radio" id="male" name="gender"></input>
						<label htmlFor="custom">Custom</label>
						<input type="radio" id="custom" name="gender"></input>
						<br />
						<select id="customGender">
							<option value="she">Wish her a happy birthday</option>
						</select>
						<input
							id="optionalGender"
							type="text"
							placeholder="Gender (optional)"
							disabled={true}
						></input>
					</div>
					<div className="info">
						<p>
							People who use our service may have uploaded your contact
							information to Facebook. <a href="#">Learn More</a>
						</p>
						<p>
							By clicking Sign Up, you agree to our{" "}
							<a href="#">Terms, Privacy Policy and Cookies Policy.</a> You may
							receive SMS Notifications from us and can opt out any time
						</p>
					</div>
					<div className="submitBtnContainer">
						<button className="submitBtn" type="submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}
