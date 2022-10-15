import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <br />
        <br />
        <input type="number" placeholder="Mobile number or email" />
        <input type="password" placeholder="new password" />
        <br />
        <br />
        <select>
          <option value="1">1</option>
          <option value="1">2</option>
          <option value="1">3</option>
          <option value="1">4</option>
          <option value="1">5</option>
          <option value="1">6</option>
          <option value="1">7</option>
          <option value="1">8</option>
          <option value="1">9</option>
          <option value="1">10</option>
          <option value="1">11</option>
          <option value="1">12</option>
          <option value="1">13</option>
          <option value="1">14</option>
          <option value="1">15</option>
          <option value="1">16</option>
          <option value="1">17</option>
          <option value="1">18</option>
          <option value="1">19</option>
          <option value="1">20</option>
          <option value="1">21</option>
          <option value="1">22</option>
          <option value="1">23</option>
          <option value="1">24</option>
          <option value="1">25</option>
          <option value="1">26</option>
          <option value="1">27</option>
          <option value="1">28</option>
          <option value="1">29</option>
          <option value="1">30</option>
          <option value="1">31</option>
        </select>

        <select>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          <option value="April">April</option>
          <option value="May">May</option>
          <option value="June">June</option>
          <option value="July">July</option>
          <option value="August">August</option>
          <option value="September">September</option>
          <option value="October">October</option>
          <option value="November">November</option>
          <option value="December">December</option>
        </select>
        <select>
          <option value="2022">2022</option>
          <option value="2022">2021</option>
          <option value="2022">2020</option>
          <option value="2022">2019</option>
          <option value="2022">2018</option>
        </select>

        <label htmlFor="Female">
          <h3>Female</h3>
          <input name="gender" type="radio" />
        </label>
        <label htmlFor="Female">
          <h3>Male</h3>
          <input name="gender" type="radio" />
        </label>
        <label htmlFor="Female">
          <h3>Other</h3>
          <input name="gender" type="radio" />
        </label>
        <br />
        <select>
          <option value="AAA">AAA</option>
          <option value="BBB">BBB</option>
          <option value="CCC">CCC</option>
        </select>
        <br />
        <br />
        <input type="text" placeholder="Gender" />
      </form>
    );
  }
}

export default Form;
