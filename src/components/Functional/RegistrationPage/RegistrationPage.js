import React from "react";
import Input from "../Input/Input";
const RegistrationPage = (props) => {

    console.log(props)
     return (
        <div>
            <h2>Registration Page</h2>
            <div>
               <Input  {...props}/>
            </div>
        </div>
    )
}

export default RegistrationPage;