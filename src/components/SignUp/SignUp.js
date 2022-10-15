import React, {Component} from 'react';
import BirthdayInput from './BirthdayInput/BirthdayInput'
import GenderInput from './GenderInput/GenderInput'
import TextInput from '../TextInput/TextInput'

class SignUp extends Component {
    constructor(props) {
        super(props);
        const {defaultValue, onSubmit} = this.props
        this.state = {
            values: {
            ...defaultValue
            }
        }
    }

    render() {
        const {firstName, lastName, number, password } = this.state.values
        return (
            <div>
                <form action="">
                    <div className={'firstname-lastname'}>
                        <TextInput value={firstName} placeholder={'First name'} onChange/>
                        <TextInput value={lastName} placeholder={'Last name'}/>
                    </div>
                    <br/>
                    <TextInput value={number} placeholder={'Mobile Number or email'}/>
                    <TextInput value={password} placeholder={'New password'}/>
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