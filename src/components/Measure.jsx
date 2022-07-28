import React from "react";
import "@styles/components/Measure.css";

import { useCalcContext } from "@contexts/CalcContext";

const Measure = () => {
  const { size, setSize } = useCalcContext();

  const onChange = e => {
    // Input: allow only numbers and dot
    const parseInput = e.target.value.replace(/[^0-9.]/g, "");
    setSize(parseInput);
  };

  return (
    <div>
      <label htmlFor='measure' className='input-measure'>
        My size is
        <input type='text' id='measure' value={size} onChange={onChange} maxLength={5} />
        inches.
      </label>
    </div>
  );
};

export default Measure;
