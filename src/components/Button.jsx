import React from "react";
import "@styles/components/Button.css";

const Button = ({ label, onClick }) => {
  return (
    <button className='main-btn' onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
