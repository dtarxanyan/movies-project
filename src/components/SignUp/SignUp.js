import React, {Component} from 'react';
import BirthdayInput from './BirthdayInput/BirthdayInput'
import GenderInput from './GenderInput/GenderInput'
import TextInput from '../TextInput/TextInput'

class SignUp extends Component {

    constructor(props) {
        super(props);

         const { defaultValues}  = this.props
        this.state = {
                values:{
                    firstName : '',
                    lastName: '',
                    password : '',
                    email : '',
                    ...defaultValues,
                }

        }
    }
    handleInput = (name,value)=> {
        this.setState({value:{
            ...this.state.values,
                [name]:value
        }})
    }

    

    onSubmit = () =>{
        this.props.onSubmit(this.state.values)
    }




    render() {
        const {firstName,lastName,password,email} = this.state.values

        return (
            <div>

                <form action="">
                    <div className={'firstname-lastname'}>
                        <TextInput onChange={(e)=>this.handleInput(firstName,e)}  value={ firstName } placeholder={'First name'}/>
                        <TextInput  onChange={(e)=> this.handleInput(lastName,e)} value = { lastName } placeholder={'Last name'}/>
                    </div>
                    <br/>
                    <TextInput onChange={(e)=>this.handleInput(email,e)}  value ={ email } placeholder={'Mobile Number or email'}/>
                    <TextInput onChange={(e)=>this.handleInput(password,e)} value = { password } placeholder={'New password'}/>
                    <br/>
                    <br/>
                    <BirthdayInput/>
                    <br/>
                    <GenderInput/>
                    <br/>
                    <button onClick={this.onSubmit } type={'submit'}>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;