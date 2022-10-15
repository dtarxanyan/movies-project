import React, {Component} from 'react';
import BirthdayInput from './BirthdayInput/BirthdayInput'
import GenderInput from './GenderInput/GenderInput'
import TextInput from '../TextInput/TextInput'

class SignUp extends Component {
constructor(props) {
    super(props);

    const {defaultValues} = this.props;
    this.state={
        values: {
            firstName: "",
            ...defaultValues
        }
    }
}

onSubmit = (e, values) => {
    e.preventDefault();

}


    render() {
        const {lastName, firstName, mobileOrEmail} = this.state.values;
        return (
            <div>
                <form action="" >
                    <div className={'firstname-lastname'}>
                        <TextInput
                            placeholder={'First name'}
                            value={firstName}/>
                        <TextInput placeholder={'Last name'} value={lastName}/>
                    </div>
                    <br/>
                    <TextInput placeholder={'Mobile Number or email'} value={mobileOrEmail}/>
                    <TextInput placeholder={'New password'}/>
                    <br/>
                    <br/>
                    <BirthdayInput/>
                    <br/>
                    <GenderInput/>
                    <br/>
                    <button type={'submit'}  >Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;