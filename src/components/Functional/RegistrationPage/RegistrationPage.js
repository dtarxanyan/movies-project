import React from "react";

const RegistrationPage = ({ allInputColor , disableAllInputs }) => {


     return (
        <div>
            <h2>Registration Page</h2>
            <input type="text" style={{ color: allInputColor}} disabled={disableAllInputs}/>
            
        </div>
    )
}

export default RegistrationPage;