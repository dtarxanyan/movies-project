import React, {Component} from 'react';

class FirstInputForm extends Component {
    render() {
        return (
            <form className={'form'}>
                <div className={'text'}>
                    <p><h3>Create a new account</h3></p>
                </div>
                <hr/>
                <div className={'first_input'}>
                    <input placeholder={'First name'}/>
                    <input placeholder={'Last  name'}/><br/>
                    <input placeholder={'Mobile number or email  '} /><br/>
                    <input placeholder={'New password'} type={"password"} />
                </div>
                <div className={'birthdayForm'}>
                <label>Birthday</label><br/>
                    <select>
                        <option> 2022</option>
                        <option> 2021</option>
                        <option> 2020</option>
                    </select>

                <select>
                    <option> 1</option>
                    <option> 2 </option>
                    <option> 3</option>
                </select>

                <select>
                    <option> Jan</option>
                    <option> Feb</option>
                    <option> May</option>
                </select>
                </div>
                <div className={'genderForm'}>

                 <input  name={'gender'} type={"radio"} />
                    <label>Female</label>
                 <input  name={'gender'} type={"radio"}/>
                    <label>Male</label>
                 <input  name={'gender'} type={"radio"}/>
                    <label>Custom</label>
                </div>
                <div className={'buttome'}>
                    <button> Sign Up</button>
                </div>
            </form>

        );
    }
}

export default FirstInputForm ;