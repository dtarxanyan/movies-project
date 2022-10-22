import React from "react";

const RegistrationPage = ({ allInputsColor, disableAllInputs }) => {
     return (
        <div>
            <h2>Registration Page</h2>
            <div>
                Registration page contents Here
            </div>
            <label htmlFor="text"></label>
            <input disabled={disableAllInputs} id={'text'} type="text" style={{color: allInputsColor}}/>
        </div>
    )
}

export default RegistrationPage;