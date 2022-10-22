import React from "react";

const RegistrationPage = ({colors,disabled}) => {
     return (
        <div>
            <h2>Registration Page</h2>
            <div>
              <input type='text' style={{color:colors}} disabled={disabled} />
            </div>
        </div>
    )
}

export default RegistrationPage;