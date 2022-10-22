import React from "react";

const RegistrationPage = ({allInputsColor,disableAllInputs}) => {
     return (
        <div>
            <h2>Registration Page</h2>
            <div>
                <label htmlFor={ 'text' }></label>
                <input
                     disabled={ disableAllInputs}
                     id = { 'text' }
                     style={{color : allInputsColor}}
                     type={ 'text' }
                />
            </div>
        </div>
    )
}

export default RegistrationPage;