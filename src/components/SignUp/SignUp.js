import React, {Component} from 'react';
import BirthdayInput from './BirthdayInput/BirthdayInput'
import GenderInput from './GenderInput/GenderInput'
import TextInput from '../TextInput/TextInput'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.default
        }
        this.onChangeValue = this.onChangeValue.bind(this)
    }

    onChangeValue(val, name) {
        this.setState({
            [name]: val
        })

    }


    render() {

        console.log(this.state)
        return (
            <div>
                <form action="">
                    <div className={'firstname-lastname'}>
                        <TextInput onChangeValue={this.onChangeValue} placeholder={'First name'}/>
                        <TextInput onChangeValue={this.onChangeValue} placeholder={'Last name'}/>
                    </div>
                    <br/>
                    <TextInput onChangeValue={this.onChangeValue} placeholder={'Mobile Number or email'}/>
                    <TextInput onChangeValue={this.onChangeValue} placeholder={'New password'}/>
                    <br/>
                    <br/>
                    <BirthdayInput onChangeValue={this.onChangeValue}/>
                    <br/>
                    <GenderInput onChangeValue={this.onChangeValue}/>
                    <br/>
                    <button onClick={this.props.handleSubmit} type={'submit'}>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;