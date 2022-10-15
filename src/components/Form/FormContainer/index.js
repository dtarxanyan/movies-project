import React, {Component} from 'react';

class FormContainer extends Component {
    render() {
        return (
            <div>
                <h3>Sign Up</h3>
                <p>Its quick and easy</p>
                <form action="">
                    <input type="text" placeholder={"First name"}/>
                    <input type="text" placeholder={"Last name"}/>
                    <br/>
                    <input type="text" placeholder={"Mobile number or email"}/>
                    <br/>
                    <input type="password" placeholder={"New password"}/>
                    <br/>
                    <label htmlFor="birthday"></label>
                    <div>
                        <select name="" id="birthday">
                            <option value="oct">Oct</option>
                            <option value="oct">Sep</option>
                        </select>

                        <select name="" id="birthday">
                            <option value="">1</option>
                            <option value="">2</option>
                        </select>

                        <select name="" id="birthday">
                            <option value="">2020</option>
                            <option value="">2021</option>
                        </select>

                    </div>
                    <br/>
                    <div>
                        <label htmlFor="female">Female</label>
                        <input type="radio" name={"check"} id={"female"}/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" name={"check"} id={"male"}/>
                        <label htmlFor="Custom">Custom</label>
                        <input type="radio" name={"check"} id={"Custom"}/>
                    </div>
                    <br/>
                    <select name="Select your pronun" id="">
                        <option value="">She: "Wish her a happy birthday"!</option>
                        <option value="">He: "Wish him a happy birthday"!</option>
                        <option value="">They: "Wish them a happy birthday"!</option>

                    </select>
                    <p>Your pronoun is visible to everyone</p>
                    <input type="text" placeholder={"Gender (optional)"}/>

                </form>
            </div>
        );
    }
}

export default FormContainer;