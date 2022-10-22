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
        <p>Height is {volume * 12}</p>
      </form>
    </>
  );
};

export default InputField;
