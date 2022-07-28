import React from "react";
import "@styles/components/Dropdown.css";

const Dropdown = ({ options, select, loading }) => {
  return (
    <ul className='dropdown'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {options.length > 0 ? (
            options.map(option => (
              <li key={option.id} onClick={() => select(option)}>
                {option.name}
              </li>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </>
      )}
    </ul>
  );
};

export default Dropdown;
