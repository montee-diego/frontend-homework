import React, { createContext, useContext, useState } from "react";

const CalcContext = createContext();

export const CalcProvider = ({ children }) => {
  const [brand, setBrand] = useState(null);
  const [category, setCategory] = useState(null);
  const [size, setSize] = useState("");
  const [result, setResult] = useState(null);

  const resetApp = () => {
    setBrand(null);
    setCategory(null);
    setSize("");
  };

  return (
    <CalcContext.Provider
      value={{
        brand,
        category,
        size,
        result,
        setBrand,
        setCategory,
        setSize,
        setResult,
        resetApp,
      }}>
      {children}
    </CalcContext.Provider>
  );
};

export const useCalcContext = () => useContext(CalcContext);
