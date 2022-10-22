import CalcVolume from "../Functional/CalcVolume/CalcVolume";
import { useState } from "react";
const VolumeAndArea = () => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);

  return (
    <div>
      <form className="form">
        <input
          type="number"
          placeholder="height"
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="weight"
          onChange={(e) => setWeight(e.target.value)}
        />
        <p>Area is {height * weight}</p>
      </form>
      <CalcVolume area={height * weight} />
    </div>
  );
};

export default VolumeAndArea;
