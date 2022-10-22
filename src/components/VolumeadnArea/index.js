import { useState } from "react";

const InputField = ({ area }) => {
  const [volume, setVolume] = useState(null);
  return (
    <>
      <form className="container">
        <input
          type="text"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
        <p>Volume is {volume * area}</p>
      </form>
    </>
  );
};

export default InputField;
