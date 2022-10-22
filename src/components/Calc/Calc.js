import { useState } from 'react';

function Calc({ area }) {
  const [volume, setVolume] = useState(0);

  return (
    <div className="wrapper">
      <label htmlFor="inp">Height</label>
      <input id="inp" onChange={(e) => setVolume(e.target.value)} type="number" />
      <div>Volume: {volume * area}</div>
    </div>
  );
}

export default Calc;
