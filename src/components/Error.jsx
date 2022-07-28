import React from "react";
import "@styles/components/Error.css";

import { Button } from "@components";

const Error = ({ setIsError }) => {
  return (
    <>
      <h2>An error has occurred.</h2>
      <h3>Please try again.</h3>
      <Button label='OK' onClick={() => setIsError(false)} />
    </>
  );
};

export default Error;
