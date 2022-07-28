import React from "react";
import { DebounceInput } from "react-debounce-input";
import "@styles/components/Input.css";

import dropdown from "@assets/dropdown.svg";

const Input = ({ value, filter, prompt, open, setOpen, query, children }) => {
  const onFilter = e => {
    filter(e.target.value);
  };

  const displayValue = () => {
    return value?.name || query;
  };

  return (
    <div className='input'>
      <DebounceInput
        debounceTimeout={500}
        onChange={onFilter}
        onFocus={() => setOpen(true)}
        placeholder={`Select a ${prompt}`}
        value={displayValue()}
      />
      <img src={dropdown} className={open ? "active" : ""} alt='' />
      {open && children}
    </div>
  );
};

export default Input;
