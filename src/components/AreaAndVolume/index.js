import React, { useState } from "react";

export default function Area({area}) {
  const [volume, setVolume] = useState(null);

  const handleVolume = (e) => {
    let newVolume = e.target.value * area
setVolume(newVolume)
  };

  return (
    <div className="mainDiv">
      <div className="volumeDiv">
        <input className="Height" type="number" onChange={handleVolume} />
        <h5>Volume: {volume}</h5>
      </div>
    </div>
  );
}
