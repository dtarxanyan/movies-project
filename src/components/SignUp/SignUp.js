import React, {Component} from 'react';
import BirthdayInput from './BirthdayInput/BirthdayInput'
import GenderInput from './GenderInput/GenderInput'
import TextInput from '../TextInput/TextInput'

class SignUp extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <div className={'firstname-lastname'}>
                        <TextInput placeholder={'First name'}/>
                        <TextInput placeholder={'Last name'}/>
                    </div>
                    <br/>
                    <TextInput placeholder={'Mobile Number or email'}/>
                    <TextInput placeholder={'New password'}/>
                    <br/>
                    <br/>
                    <BirthdayInput/>
                    <br/>
                    <GenderInput/>
                    <br/>
                    <button type={'submit'}>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;