import React from "react";

const RegistrationPage = (props) => {
     return (
        <div>
            <h2>Registration Page</h2>
            <div>
                    <input
                    disabled={props.disableAllInputs}
                    style={{color : props.allInputsColor}}
                    id='input'
                    text='text'
                    placeholder="write"
                    name='input'
                    />
            </div>
        </div>
    )
}

export default RegistrationPage;