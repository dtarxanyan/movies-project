import React, {Component} from 'react';
import BirthdayInput from './BirthdayInput/BirthdayInput'
import GenderInput from './GenderInput/GenderInput'
import TextInput from '../TextInput/TextInput'

class SignUp extends Component {

    constructor(props) {
        super(props);

        const { defaultValues } = props

        this.state = {
            values: {
                firstName: "",
                ...defaultValues
            }
        }
    }

    onSubmit = () => {
        this.props.onSubmit(this.state.values)
    }

    render() {
        const {firstName,lastName,mobileNumber,password} = this.state.values
        return (
            <div>
                <form action="" >
                    <div className={'firstname-lastname'}>
                        <TextInput value={firstName} placeholder={firstName}/>
                        <TextInput value={lastName} placeholder={lastName}/>
                    </div>
                    <br/>
                    <TextInput value={mobileNumber} placeholder={mobileNumber}/>
                    <TextInput value={password} placeholder={password}/>
                    <br/>
                    <br/>
                    <BirthdayInput/>
                    <br/>
                    <GenderInput/>
                    <br/>
                    <button type={'button'} onClick={this.onSubmit} >Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;