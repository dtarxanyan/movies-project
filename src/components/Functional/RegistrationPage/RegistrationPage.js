import React, {useState} from "react";

const RegistrationPage = ({disableAllinputs, allInputsColor}) => {

    


     return (
        <div>
            <h2>Registration Page</h2>
            <div>
                <form  action="">
                    <input

                        type="text"
                        style={{color: allInputsColor}}
                        disabled={disableAllinputs}
                        />


                </form 
                    >
            </div>
        </div>
    )
}

export default RegistrationPage;