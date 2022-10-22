import React from 'react';

const RegistrationPage = (props) => {
  return (
    <div>
      <h2>Registration Page</h2>
      <div>
        <form>
          <input
            disabled={props.disableAllInputs}
            style={{ color: props.allInputsColor }}
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
