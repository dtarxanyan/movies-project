import { useState } from 'react';

function Calc({ area }) {
  const [volume, setVolume] = useState(0);

  return (
    <div>
      <label htmlFor="input">Height</label>
      <input id="input" onChange={(e) => setVolume(e.target.value * area)} type="number" />
      <div>Volume: {volume}</div>
    </div>
  );
}

export default Calc;
