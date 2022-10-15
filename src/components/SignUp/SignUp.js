import React, {Component} from 'react';
import BirthdayInput from './BirthdayInput/BirthdayInput'
import GenderInput from './GenderInput/GenderInput'
import TextInput from '../TextInput/TextInput'

class SignUp extends Component {

    constructor(props) {
        super(props);
        
         const { defaultValues}  = this.props
        this.state = {
                value:{
                    firstName : '',
                    lastName: '',
                    password : '',
                    email : '',
                    ...defaultValues,
                }

        }
    }
    handleInput(name,value){
        this.setState({value:{
            ...this.state.value,
                [name]:value
        }})
    }

    // handleChange = (e) => {
    //     const value = e.target.value;
    //     this.setState({value});
    //     this.props.onChange(value);
    // }

    onSubmit =()=>{
        this.props.onSubmit(this.state.value)
    }




    render() {
        const {firstName,lastName,password,email,handleInput} = this.state

        return (
            <div>

                <form action="">
                    <div className={'firstname-lastname'}>
                        <TextInput onChange={(e)=>handleInput(e.target.value)}  value={ firstName } placeholder={'First name'}/>
                        <TextInput  value = { lastName } placeholder={'Last name'}/>
                    </div>
                    <br/>
                    <TextInput  value ={ email } placeholder={'Mobile Number or email'}/>
                    <TextInput  value = { password } placeholder={'New password'}/>
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