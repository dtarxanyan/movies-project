import { useState } from 'react';
import CalcVolume from '../CalcVolume/CalcVolume';

function CalcAreaAndVolume() {
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);

  return (
    <div>
      <label htmlFor="width">Width</label>
      <input type="number" id="width" onChange={(e) => setWidth(e.target.value)} />
      <br />
      <br />
      <label htmlFor="length">Length</label>
      <input type="number" id="length" onChange={(e) => setLength(e.target.value)} />
      <br />
      <br />
      <div>Area: {width * length}</div>
      <br />
      <br />
      <CalcVolume area={width * length} />
    </div>
  );
}

export default CalcAreaAndVolume;
