import React from 'react';

const RegistrationPage = ({ disableAllInputs, allInputsColor }) => {
  return (
    <div>
      <h2>Registration Page</h2>
      <div>
        <form>
          <input
            placeholder="..."
            disabled={disableAllInputs}
            style={{ color: allInputsColor }}
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
