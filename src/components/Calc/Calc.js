import { useState } from 'react';

function Calc({ area }) {
  const [height, setHeight] = useState(0);

  return (
    <div className="wrapper">
      <label htmlFor="inp">Height</label>
      <input id="inp" onChange={(e) => setHeight(e.target.value)} type="number" />
      <div>Volume: {height * area}</div>
    </div>
  );
}

export default Calc;
