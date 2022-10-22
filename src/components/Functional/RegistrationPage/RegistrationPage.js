import React, { useState } from "react";

const RegistrationPage = ({ disableAllInputs, color }) => {
  const [data, setData] = useState("red");
  const handleChange = (e) => {
    setData(e.target.value);
  };
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
