import React from "react";

const RegistrationPage = ({ disableAllInputs, color }) => {

  return (
    <div>
      <h2>Registration Page</h2>
      <div>
        <input
        style = {{color}}
          disabled={disableAllInputs}
        />
      </div>
    </div>
  );
};

export default RegistrationPage;
