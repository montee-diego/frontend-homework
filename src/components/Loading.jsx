import React from "react";
import "@styles/components/Loading.css";

import hanger from "@assets/hanger.svg";

const Loading = () => {
  return (
    <div className='loading'>
      <img src={hanger} alt='' />
      <span>Calculating sizes...</span>
    </div>
  );
};

export default Loading;
