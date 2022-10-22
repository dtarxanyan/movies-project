import React from "react";

const RegistrationPage = ({ disableAllInputs, inputsColor }) => {
  return (
    <div>
      <h2>Registration Page</h2>
      <div>
        <form autoComplete="off">
          <div className="inputBox">
            <input
              disabled={disableAllInputs}
              type="text"
              placeholder="Name"
              style={{ color: inputsColor }}
            />
            <input
              disabled={disableAllInputs}
              type="text"
              placeholder="Surname"
              style={{ color: inputsColor }}
            />
            <div className="btnDIV">
              <button>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
