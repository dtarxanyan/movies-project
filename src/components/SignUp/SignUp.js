import React, {Component} from 'react';
import BirthdayInput from './BirthdayInput/BirthdayInput'
import GenderInput from './GenderInput/GenderInput'
import TextInput from '../TextInput/TextInput'

class SignUp extends Component {

constructor(props) {
        super(props);
        this.state = {
            values:{FirstName:"", ...props.defaultValues},
            FirstName:"",
           LastName: "",
           MobileNumber:"",
           Newpassword:"",
        }
    }
    render() {
        return (
            <div>
                <form action="">
                    <div className={'firstname-lastname'}>
                        <TextInput FirstName={this.state.values.value}placeholder={'First name'}/>
                        <TextInput LastName={this.state.values.value}placeholder={'Last name'}/>
                    </div>
                    <br/>
                    <TextInput MobileNumber={this.state.values.value}placeholder={'Mobile Number or email'}/>
                    <TextInput Newpassword={this.state.values.value}placeholder={'New password'}/>
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