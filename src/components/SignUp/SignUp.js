import React, {Component} from 'react';
import BirthdayInput from './BirthdayInput/BirthdayInput'
import GenderInput from './GenderInput/GenderInput'
import TextInput from '../TextInput/TextInput'

class SignUp extends Component {
    constructor(props) {
        super(props);

        const { defaultValues } = this.props;

        this.state = {
            values: {
                firstName: '',
                lastName: '',
                mobile: '',
                _password: '',
                ...defaultValues,
            }
        }


    }

    onSubmit = () => {
        this.props.onSubmit(this.state.values)
    }

    handleInput = (name, value) => {
        this.setState({ values: {
                ...this.state.values,
                [name]: value
            }, })
    }

    render() {
        const { firstName, lastName, mobileNumber, _password } = this.state.values;

        return (
            <div>
                <form action="">
                    <div className={'firstname-lastname'}>
                        <TextInput onChange = { (event) => this.handleInput('firstName', event) } value = { firstName } placeholder={'First name'}/>
                        <TextInput onChange = { (event) => this.handleInput('lastName', event) } value = { lastName } placeholder={'Last name'}/>
                    </div>
                    <br/>
                    <TextInput onChange = { (event) => this.handleInput('mobile', event) } value = { mobileNumber } placeholder={'Mobile Number or email'}/>
                    <TextInput onChange = { (event) => this.handleInput('_password', event) } value = { _password } placeholder={'New password'}/>
                    <br/>
                    <br/>
                    <BirthdayInput/>
                    <br/>
                    <GenderInput/>
                    <br/>
                    <button onClick = { this.onSubmit } type={'button'}>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;