import React, { useState } from "react";
import Input from "../Input/Input";

const CalcVolume = (props) => {
  const { area } = props;
  const [volume, setVolume] = useState(0);
  console.log(area);
  const calcVolume = (area, height) => {
    return area * height;
  };

  const onChange = (height) => {
    const vol = calcVolume(area, height);
    setVolume(vol);
  };

  return (
    <>
      <Input
        type={"number"}
        label={"Height"}
        onChange={(value) => onChange(value)}
      />

      <p>Volume: {volume}</p>
    </>
  );
};

export default CalcVolume;
