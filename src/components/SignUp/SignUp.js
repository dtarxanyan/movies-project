import React, { Component } from 'react';
import BirthdayInput from './BirthdayInput/BirthdayInput'
import GenderInput from './GenderInput/GenderInput'
import TextInput from '../TextInput/TextInput'

class SignUp extends Component {
    constructor(props) {
        super(props)
        const { defaultValue } = props
        this.state = {
            values: {
                ...defaultValue
            }
        }
    }

    onSubmit = () => {
        this.props.onSubmit(this.state.values)
    }
    handleonChengInput = (name, value) => {
        this.setState({
            values: {
                ...this.state.values,
                [name]: value
            }
        })
    }




    render() {
        const { fristName, lastName, number, password } = this.state.values
        return (
            <div>
                <form action=""  >
                    <div className={'firstname-lastname'}>
                        <TextInput onChange={(e) => this.handleonChengInput('fristName', e)} value={fristName} placeholder={'First name'} />
                        <TextInput onChange={(e) => this.handleonChengInput('lastName', e)} value={lastName} placeholder={'Last name'} />
                    </div>
                    <br />
                    <TextInput onChange={(e) => this.handleonChengInput('number', e)} value={number} placeholder={'Mobile Number or email'} type={'number'} />
                    <TextInput onChange={(e) => this.handleonChengInput('password', e)} value={password} placeholder={'New password'} />

                    <br />
                    <BirthdayInput />
                    <br />
                    <GenderInput />
                    <br />
                    <button onClick={this.onSubmit} type={'button'}>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;