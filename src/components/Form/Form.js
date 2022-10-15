import React from "react";
import Dropdown from "../Dropdown/Dropdown";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            momths: [],
            days: [],
            years: [],
        }
    }

    render() {

        return (
            <form>
             <label for="name">First name</label>
             <input type="text" id="name" name="name" />
             <label for="lastname">Last name</label>
             <input type="text" id="lastname" name="lastname" />
             <br />
             <label for="email">email</label>
             <input type="email" id="email" name="email" />
             <br />
             <label for="password">password</label>
             <input type="password" id="password" name="password" />
            </ form>
        )
    }
}

export default Form;