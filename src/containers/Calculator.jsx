import React from "react";
import "@styles/containers/Calculator.css";

import logo from "@assets/logo.svg";

const Calculator = ({ children }) => {
  return (
    <div className='calculator'>
      <div className='title'>
        <img src={logo} alt='S' />
        <h1>Size Calculator</h1>
      </div>
      <div className='size-form'>{children}</div>
    </div>
  );
};

export default Calculator;
