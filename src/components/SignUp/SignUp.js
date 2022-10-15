import React, {Component} from 'react';

class SignUp extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <div className={ 'firstname-lastname' }>
                        <input type="text" placeholder={ 'First name' }/>
                        <input type="text" placeholder={ 'Last name' }/>
                    </div>
                    <br/>
                    <input type="text" placeholder={ 'Mobile Number or email' }/>
                    <input type="text" placeholder={ 'New password' }/>
                    <br/>
                    <br/>
                    <div className={ 'birthday' }>
                        <label htmlFor="month">Birthday</label>
                        <select name="month" id="month">
                            <option value="">Jan</option>
                            <option value="">Feb</option>
                            <option value="">Mar</option>
                            <option value="">Apr</option>
                            <option value="">May</option>
                            <option value="">June</option>
                            <option value="">July</option>
                            <option value="">Aug</option>
                            <option value="">Sep</option>
                            <option value="">Oct</option>
                            <option value="">Nov</option>
                            <option value="">Dec</option>
                        </select>
                        <select name="day" id="day">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                            <option value="">11</option>
                            <option value="">12</option>
                        </select>
                        <select name="year" id="year">
                            <option value="">1992</option>
                            <option value="">1993</option>
                            <option value="">1994</option>
                            <option value="">1995</option>
                            <option value="">1996</option>
                            <option value="">1997</option>
                            <option value="">1998</option>
                            <option value="">1999</option>
                            <option value="">2000</option>
                            <option value="">2001</option>
                            <option value="">2002</option>
                            <option value="">2003</option>
                        </select>
                    </div>
                    <br/>
                    <div className={ 'gender' }>
                        <label htmlFor="female">Female</label>
                        <input type="radio" id={ 'female' }/>
                        <label htmlFor="male">Male</label>
                        <input type="radio" id={ 'male' }/>
                        <label htmlFor="custom">Custom</label>
                        <input type="radio" id={ 'custom' }/>
                    </div>
                    <br/>
                    <select name="pronoun" id="pronoun">
                        <option selected value="">She: 'Wish her a happy birthday'</option>
                        <option value="">He: 'Wish him a happy birthday'</option>
                        <option value="">They: 'Wish them a happy birthday'</option>
                        <option value=""></option>
                    </select>
                    <br/>
                    <br/>
                    <input type="text" placeholder={ 'Gender (optional)' }/>
                    <br/>
                    <button type={ 'submit' }>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;