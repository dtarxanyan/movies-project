import React, { useState } from "react";

export default function CalcVolume({ area, width, length }) {
  const [volume, setVolume] = useState("");
  return (
    <>
      <h3>height</h3>
      <input
        type="text"
        placeholder="Height"
        onChange={(e) => setVolume(e.target.value * area)}
      />
      <div>
        Volume:{width !== undefined && length !== undefined ? volume : ""}
      </div>
    </>
  );
}
