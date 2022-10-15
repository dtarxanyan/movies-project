import React, { Component } from 'react';
import BirthdayInput from './BirthdayInput/BirthdayInput'
import GenderInput from './GenderInput/GenderInput'
import TextInput from '../TextInput/TextInput'

class SignUp extends Component {
    constructor(props) {
        super(props)
        const { defaultValue} = props
        this.state = {
            values: {
                ...defaultValue
            }
        }
    }
    onSubmit(e) {
        console.log(e.value);
    }



    render() {
        const { fristName, lastName, number, password } = this.state.values
        return (
            <div>
                <form action=""  >
                    <div className={'firstname-lastname'}>
                        <TextInput value={fristName} placeholder={'First name'} />
                        <TextInput value={lastName} placeholder={'Last name'} />
                    </div>
                    <br />
                    <TextInput value={number} placeholder={'Mobile Number or email'} />
                    <TextInput value={password} placeholder={'New password'} />
                    
                    <br />
                    <BirthdayInput />
                    <br />
                    <GenderInput />
                    <br />
                    <button onSubmit={(value)=> this.props.onSubmit(console.log(value))}  type={'submit'}>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;