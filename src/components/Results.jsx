import React from "react";
import "@styles/components/Results.css";

import { useCalcContext } from "@contexts/CalcContext";
import { Button } from "@components";

const Results = ({ setIsViewResult }) => {
  const { result, setResult } = useCalcContext();

  const formatResults = result.reduce((prev, next) => {
    if (prev !== "") {
      return prev + " or " + next.label;
    } else {
      return prev + next.label;
    }
  }, "");

  const closeResults = () => {
    setIsViewResult(false);
    setResult(null);
  };

  return (
    <>
      {result.length > 0 ? (
        <>
          <h2>Your size is</h2>
          <h3 className='sizes'>{formatResults}</h3>
        </>
      ) : (
        <>
          <h2>No results found.</h2>
          <h3 className='error'>Please try again.</h3>
        </>
      )}

      <Button label='OK' onClick={closeResults} />
    </>
  );
};

export default Results;
